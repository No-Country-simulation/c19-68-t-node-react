import mongoose from "mongoose";
import {
  appointmentsManager,
  patientManager,
  doctorManager,
} from "../dao/index.dao.js";
import CustomError from "../middlewares/error.middleware.js";

class AppointmentService {
  async getAppoById(patient_id, state) {
    try {
      if (
        (!state === false && state !== "pending") ||
        state !== "confirmed" ||
        state !== "completed" ||
        state !== "canceled"
      ) {
        console.error("ERROR: Se ingreso parametro no valido");
        throw new CustomError("invalid parameter in the route", 400);
      }

      if (state !== ":state" &&
        state === "pending" ||
        state === "confirmed" ||
        state === "completed" ||
        state === "canceled"
      ) {
        const appointPatient = await appointmentsManager.findPopulate(
          {
            patient_id,
            state,
          },
          "doctor_id", //coleccion doctors
          "-password -token -availability -confirmed -availabilityStatus -confirmationString" //excluyendo parametros de la coleccion de doctors
        );
        //si no encuentra citas ya sea null o arreglo vacio
        if (!appointPatient || appointPatient.length === 0) {
          console.error(`ERROR: No tiene citas para el estado "${state}"`);
          throw new CustomError(
            `There are not ${state} appointments for this patient`,
            404
          );
        }
        console.log(
          `>>>>> extrayendo información de citas del paciente id:${patient_id} con el estado "${state}"`
        );
        return appointPatient;
      }

      const appointPatientState = await appointmentsManager.findPopulate(
        {
          patient_id,
        },
        "doctor_id", //coleccion doctors
        "-password -token -availability -confirmed -availabilityStatus -confirmationString" //excluyendo parametros de la coleccion de doctors
      );
      //si no encuentra citas ya sea null o arreglo vacio
      if (!appointPatientState || appointPatientState.length === 0) {
        console.error(`ERROR: No tiene citas para el estado "${state}"`);
        throw new CustomError(
          `There are not appointments for this patient`,
          404
        );
      }
      console.log(
        `>>>>> extrayendo información de citas del paciente id:${patient_id}`
      );

      return appointPatientState;

    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(error.message, 500);
      }
    }
  }

  async getAppoByIdDoc(doctor_id, date) {
    try {
      // Validar que la fecha tenga el formato "YYYY-MM-DD" y sea una fecha válida.
      if (date !== ":date" && /^\d{4}-\d{2}-\d{2}$/.test(date) === false) {
        console.error("Formato de fecha no valido");
        throw new CustomError("La fecha debe tener el formato YYYY-MM-DD", 400);
      }

      if (
        typeof date === "string" &&
        /^\d{4}-\d{2}-\d{2}$/.test(date) &&
        !isNaN(new Date(date).getTime())
      ) {
        const searchDate = new Date(date);

        const appointDocDate = await appointmentsManager.find({
          doctor_id,
          date: searchDate,
        });
        if (appointDocDate.length === 0) {
          console.error(
            `ERROR: No tiene citas el doctor para la fecha "${date}"`
          );
          throw new CustomError(`No doctor's appointment for the date`, 404);
        }
        return appointDocDate;
      }

      const appointDoctor = await appointmentsManager.find({
        doctor_id,
      });

      if (appointDoctor.length === 0) {
        console.error(`ERROR: No tiene citas asignadas`);
        throw new CustomError(
          `There are not appointments for this doctor`,
          404
        );
      }
      return appointDoctor;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(error.message, 500);
      }
    }
  }

  async registerAppo(
    patient_id,
    doctor_id,
    date,
    startTime,
    endTime,
    video_call_link,
    reasons,
    notes
  ) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Validamos los datos obligatorios
      if (
        !patient_id ||
        !doctor_id ||
        !date ||
        !startTime ||
        !endTime ||
        !video_call_link
      ) {
        throw new CustomError("All fields are required", 400);
      }

      // Validar existencia del paciente
      await this.validatePatient(patient_id);

      // Validar existencia del doctor
      await this.validateDoctor(doctor_id);

      // Buscamos la disponibilidad general del doctor para el día y hora de la cita
      const doctorTimeSlots = await this.getDoctorTimeSlotsForDate(
        doctor_id,
        date,
        startTime,
        endTime
      );

      // Buscamos las citas del doctor para el dia de la cita que se quiere registrar
      const doctorAppo = await this.getAppoinmentsForDate(doctor_id, date);
      // Obtenemos las horas disponibles del doctor para el dia de la cita
      const availableTimeSlots = await this.getAvailableTimeSlots(
        doctorTimeSlots,
        doctorAppo
      );

      // Verificamos si la hora de la cita deseada esta en el horario disponible del doctor
      // this.isTimeSlotAvailable(availableTimeSlots, startTime, endTime);

      // Validar solo una cita x dia con un doctor
      await this.verifyQuantityAppointmentsPerDay(patient_id, doctor_id, date);

      //Verificar solapamiento para paciente y doctor
      await this.validateAppointment(
        patient_id,
        doctor_id,
        date,
        startTime,
        endTime
      );

      // Grabamos el modelo Appointment
      const newAppointment = await appointmentsManager.createWithSession(
        {
          patient_id,
          doctor_id,
          date,
          startTime,
          endTime,
          state: "pending",
          video_call_link,
          reasons,
          notes,
        },
        session
      );

      console.log("Registro exitoso de la cita");

      await session.commitTransaction();

      return newAppointment; //newAppointment;
    } catch (error) {
      await session.abortTransaction();
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(error.message, 500);
      }
    } finally {
      session.endSession();
    }
  }
  // vista de las citas por id de paciente y estado de la cita
  async validatePatient(patient_id) {
    const isPatientValid = await patientManager.findById(patient_id);
    if (!isPatientValid) {
      console.error("ERROR: El paciente no existe");
      throw new CustomError("Patient does not exist", 404);
    }
  }

  async validateDoctor(doctor_id) {
    const doctor = await doctorManager.findById(doctor_id);
    if (!doctor) {
      console.error("ERROR: El doctor no existe");
      throw new CustomError("Doctor does not exist", 404);
    }
  }

  // funcion para identificar dia de la semana segun la fecha.
  getDayOfWeek(targetDate) {
    const daysOfweek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const date = new Date(targetDate);
    const day = date.getDay();
    return daysOfweek[day];
  }

  convertToDate(targetDate, timeString) {
    const date = new Date(targetDate);
    const [hours, minutes] = timeString.split(":").map(Number);
    date.setUTCHours(hours, minutes, 0, 0);
    return date;
  }

  async getDoctorTimeSlotsForDate(doctorId, targetDate, startTime, endTime) {
    const weekdayName = this.getDayOfWeek(targetDate);
    try {
      // Buscar su disponibilidad para el día específico
      const doctor = await doctorManager.findOne({
        _id: doctorId,
        "availability.daysOfWeek": weekdayName,
        $or: [
          {
            $and: [
              {
                "availability.timeSlots.morningSlot.start": { $lte: startTime },
              },
              { "availability.timeSlots.morningSlot.end": { $gte: endTime } },
            ],
          },
          {
            $and: [
              {
                "availability.timeSlots.afternoonSlot.start": {
                  $lte: startTime,
                },
              },
              { "availability.timeSlots.afternoonSlot.end": { $gte: endTime } },
            ],
          },
        ],
      });

      if (!doctor) {
        console.log(">>>>> No hay horario disponible para esa fecha");
        throw new CustomError("There is no time available for that day", 404);
      }

      const timeSlots = [
        {
          start: this.convertToDate(
            targetDate,
            doctor.availability.timeSlots.morningSlot.start
          ),
          end: this.convertToDate(
            targetDate,
            doctor.availability.timeSlots.morningSlot.end
          ),
        },
        {
          start: this.convertToDate(
            targetDate,
            doctor.availability.timeSlots.afternoonSlot.start
          ),
          end: this.convertToDate(
            targetDate,
            doctor.availability.timeSlots.afternoonSlot.end
          ),
        },
      ];

      console.log(`>>>>> timeSlots --> ${timeSlots}`);

      return timeSlots;
    } catch (error) {
      console.error(error.message);
      throw new CustomError(error.message, 500);
    }
  }

  async getAppoinmentsForDate(doctorId, targetDate) {
    try {
      const objectIdDoctor = new mongoose.Types.ObjectId(doctorId);

      const startOfDay = new Date(targetDate);
      startOfDay.setUTCHours(0, 0, 0, 0);

      const endOfDay = new Date(targetDate);
      endOfDay.setUTCHours(23, 59, 59, 999);

      const appointments = await appointmentsManager.find({
        doctor_id: objectIdDoctor,
        date: {
          $gte: startOfDay,
          $lte: endOfDay,
        },
      });

      // Crear un array de intervalos de tiempo como objetos Date
      const bookedSlots = appointments.map((appointment) => {
        const startTime = this.convertToDate(targetDate, appointment.startTime);
        const endTime = this.convertToDate(targetDate, appointment.endTime);
        return {
          start: startTime,
          end: endTime,
        };
      });
      return bookedSlots;
    } catch (error) {
      console.error(error.message);
      throw new CustomError(error.message, 500);
    }
  }

  async validateAppointment(patient_id, doctor_id, date, startTime, endTime) {
    // Verificar solapamiento para el paciente
    let appointmentExists = await appointmentsManager.findOne({
      patient_id: patient_id,
      date: date,
      $or: [
        {
          $and: [
            { startTime: { $lte: startTime } },
            { endTime: { $gt: startTime } },
          ],
        },
        {
          $and: [
            { startTime: { $lt: endTime } },
            { endTime: { $gte: endTime } },
          ],
        },
      ],
    });
    if (appointmentExists) {
      console.error(
        "ERROR: El paciente ya tiene una cita programada en este horario"
      );
      throw new CustomError(
        "The patient already has an appointment scheduled at this time",
        400
      );
    }

    // Verificar solapamiento para el doctor
    appointmentExists = await appointmentsManager.findOne({
      doctor_id: doctor_id,
      date: date,
      $or: [
        {
          $and: [
            { startTime: { $lte: startTime } },
            { endTime: { $gt: startTime } },
          ],
        },
        {
          $and: [
            { startTime: { $lt: endTime } },
            { endTime: { $gte: endTime } },
          ],
        },
      ],
    });
    if (appointmentExists) {
      console.error(
        "ERROR: El doctor ya tiene una cita programada en este horario"
      );
      throw new CustomError(
        "The doctor already has an appointment scheduled at this time",
        400
      );
    }
  }

  async verifyQuantityAppointmentsPerDay(patient_id, doctor_id, date) {
    // Contar las citas existentes para el paciente con el doctor en el día específico
    const cantidadCitas = await appointmentsManager.findOne({
      patient_id: patient_id,
      doctor_id: doctor_id,
      date: date,
    });

    if (cantidadCitas) {
      console.error(
        "ERROR: El paciente ya tiene una cita con este doctor en este día"
      );
      throw new CustomError(
        "The patient already has an appointment with this doctor on this day",
        400
      );
    }
  }

  getAvailableTimeSlots(generalSlots, bookedSlots) {
    const isSlotAvailable = (slot, bookedSlots) => {
      return bookedSlots.every(
        (booked) => slot.end <= booked.start || slot.start >= booked.end
      );
    };

    const availableSlots = generalSlots.filter((slot) =>
      isSlotAvailable(slot, bookedSlots)
    );

    return availableSlots;
  }

  // isTimeSlotAvailable(slotsArray, startTime, endTime) {
  //   const start = new Date(startTime);
  //   const end = new Date(endTime);

  //   // Verificar si el intervalo solicitado está dentro de algún intervalo disponible
  //   const isAvailable = slotsArray.some((slot) => {
  //     return start >= slot.start && end <= slot.end;
  //   });

  //   if (!isAvailable) {
  //     console.log("La franja horaria solicitada no está disponible");
  //     throw new CustomError("The requested time slot is not available", 400);
  //   }
  // }
}

export default new AppointmentService();
