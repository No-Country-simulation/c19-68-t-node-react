import mongoose from "mongoose";
import {
  appointmentsManager,
  patientManager,
  doctorManager,
} from "../dao/index.dao.js";
import CustomError from "../middlewares/error.middleware.js";

class AppointmentService {
  async getFreeSlotDoc(doctorId, targetDate) {
    try {
      //la fecha se convierte en dia de la semana ("Monday" "Tuesday" "Wednesday" etc).
      const weekdayName = this.getDayOfWeek(targetDate);

      //Se busca que la fecha coincida con el dia de la semana.
      const doctor = await doctorManager.findOne({
        _id: doctorId,
        "availability.daysOfWeek": weekdayName,
      });

      if (!doctor) {
        throw new CustomError("Doctor is not available on this day", 404);
      }

      //Se crea un arreglo de los horarios del doctor (mañana y tarde).
      const timeRangesDoc = [
        doctor.availability.timeSlots.morningSlot.start,
        doctor.availability.timeSlots.morningSlot.end,
        doctor.availability.timeSlots.afternoonSlot.start,
        doctor.availability.timeSlots.afternoonSlot.end,
      ];

      //Con los horarios del doctor se genera el slot de todas las horas para ese doctor.
      const slotsDoctor = this.generateTimeSlots(timeRangesDoc);

      //Buscamos en las citas el doctor y la fecha consultada.
      const appointment = await appointmentsManager.find({
        doctor_id: doctorId,
        date: targetDate,
      });

      //se saca las horas ocupadas de esas citas y se crea un arreglo.
      const busyHoursDoc = appointment.map(({ startTime, endTime }) => [
        startTime,
        endTime,
      ]);

      //con los slots del doctor y las horas ocupadas se saca la disponibilidad de ese dia.
      const slotAvailDoc = this.removeTimeSlots(slotsDoctor, busyHoursDoc);

      return slotAvailDoc;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(error.message, 500);
      }
    }
  }

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

  generateTimeSlots(timeRanges) {
    function parseTime(time) {
      const [hours, minutes] = time.split(":").map(Number);
      return new Date(0, 0, 0, hours, minutes);
    }

    function formatTime(date) {
      return date.toTimeString().slice(0, 5);
    }

    function getIntervals(start, end, intervalMinutes) {
      let current = parseTime(start);
      const endTime = parseTime(end);
      const intervals = [];

      while (current < endTime) {
        const next = new Date(current);
        next.setMinutes(current.getMinutes() + intervalMinutes);
        intervals.push([formatTime(current), formatTime(next)]);
        current = next;
      }

      return intervals;
    }

    const morningIntervals = getIntervals(timeRanges[0], timeRanges[1], 60);
    const afternoonIntervals = getIntervals(timeRanges[2], timeRanges[3], 60);

    return morningIntervals.concat(afternoonIntervals);
  }

  removeTimeSlots(slots, toRemove) {
    function parseTime(time) {
      return time.split(":").map(Number);
    }

    function isInRange(slot, range) {
      const [slotStart, slotEnd] = slot.map(parseTime);
      const [rangeStart, rangeEnd] = range.map(parseTime);

      return (
        (slotStart[0] > rangeStart[0] ||
          (slotStart[0] === rangeStart[0] && slotStart[1] >= rangeStart[1])) &&
        (slotEnd[0] < rangeEnd[0] ||
          (slotEnd[0] === rangeEnd[0] && slotEnd[1] <= rangeEnd[1]))
      );
    }

    return slots.filter(
      (slot) => !toRemove.some((range) => isInRange(slot, range))
    );
  }

  async getAppoById(patient_id, state) {
    try {
      const validStates = ["pending", "confirmed", "completed", "canceled"];
      if (state !== ":state" && !validStates.includes(state)) {
        console.error("ERROR: Se ingreso parametro no valido");
        throw new CustomError("invalid parameter in the route", 400);
      }

      if (
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

      // Obtenemos las horas disponibles del doctor para el dia de la cita.
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
        console.log(">>>>> La fecha no concuerda con los horarios del doctor");
        throw new CustomError(
          "Date does not agree with doctor's schedule",
          404
        );
      }

      const timeSlots = [
        [
          doctor.availability.timeSlots.morningSlot.start,
          doctor.availability.timeSlots.morningSlot.end,
        ],
        [
          doctor.availability.timeSlots.afternoonSlot.start,
          doctor.availability.timeSlots.afternoonSlot.end,
        ],
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
