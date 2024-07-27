import mongoose from "mongoose";
import { appointmentsManager, patientManager, doctorManager } from "../dao/index.dao.js";
import CustomError from "../middlewares/error.middleware.js";

class AppointmentService {
  async registerAppo(patient_id, doctor_id, date, startTime, endTime, video_call_link, reasons, notes) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Validamos los datos obligatorios
      if (!patient_id || !doctor_id || !date || !startTime || !endTime || !video_call_link || !reasons || !notes) {
        throw new CustomError("All fields are required", 400);
      }

      // Validar existencia del paciente
      await this.validatePatient(patient_id);

      // Validar existencia del doctor
      await this.validateDoctor(doctor_id);

      // Buscamos la disponibilidad general del doctor para el día de la cita
      const doctorTimeSlots = await this.getDoctorTimeSlotsForDate(doctor_id, date);

      // Buscamos las citas del doctor para el dia de la cita que se quiere registrar
      const doctorAppo = await this.getAppoinmentsForDate(doctor_id, date);

      // Obtenemos las horas disponibles del doctor para el dia de la cita
      const availableTimeSlots = await this.getAvailableTimeSlots(doctorTimeSlots, doctorAppo);

      // Verificamos si la hora de la cita deseada esta en el horario disponible del doctor
      this.isTimeSlotAvailable(availableTimeSlots, startTime, endTime);

      // Validar solo una cita x dia con un doctor
      await this.verifyQuantityAppointmentsPerDay(patient_id, doctor_id, date);

      // Verificar solapamiento para paciente y doctor
      await this.validateAppointment(patient_id, doctor_id, date, startTime, endTime);

      // Grabamos el modelo Appointment
      const newAppointment = await appointmentsManager.createWithSession({
        patient_id,
        doctor_id,
        date,
        startTime,
        endTime,
        state: "pending",
        video_call_link,
        reasons,
        notes,
      }, session);

      console.log("Registro exitoso de la cita");

      await session.commitTransaction();
      session.endSession();

      return newAppointment;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(error.message, 500);
      }
    }
  }

  // vista de las citas por id de paciente y estado de la cita
  async getAppoById(state, patient_id) {
    try {
      const appointPatient = await appointmentsManager.find(
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
        `>>>> extrayendo información de las citas del paciente ${patient_id}`
      );

      return appointPatient;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(error.message, 500);
      }
    }
  }

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

  async getDoctorTimeSlotsForDate(doctorId, targetDate) {
    // Convertir la fecha objetivo a un formato de solo fecha (sin hora)
    const date = new Date(targetDate);
    const startOfDay = new Date(date.setHours(0, 0, 0, 0));
    const endOfDay = new Date(date.setHours(23, 59, 59, 999));

    try {
      // Buscar su disponibilidad para el día específico
      const doctor = await doctorManager.findOne({
        _id: doctorId,
        "availability.startDate": { $lte: endOfDay },
        "availability.endDate": { $gte: startOfDay },
      });

      if (!doctor) {
        console.log("No hay horario disponible para esa fecha");
        throw new CustomError("There is no time available for that date", 404);
      }

      const timeSlots = doctor.availability[0].timeSlots;
      console.log("timeSlots --> " + timeSlots);
      return timeSlots;
    } catch (error) {
      console.error(error.message);
      throw new CustomError(error.message, 500);
    }
  }

  async getAppoinmentsForDate(doctorId, targetDate) {
    console.log("targetDate --> " + targetDate);

    try {
      // Buscar las citas del doctor para el día específico
      const appo = await appointmentsManager.find({
        doctor_id: doctorId,
        date: targetDate,
      });

      return appo;
    } catch (error) {
      console.error(error.message);
      throw new CustomError(error.message, 500);
    }
  }

  getAvailableTimeSlots(generalSlots, bookedSlots) {
    // Helper function to check if a time slot is within the booked slots
    const isSlotBooked = (slot, bookedSlots) => {
      return bookedSlots.some(
        (booked) => slot === `${booked.startTime}-${booked.endTime}`
      );
    };

    // Filter out the booked slots from the general slots
    const availableSlots = generalSlots.filter(
      (slot) => !isSlotBooked(slot, bookedSlots)
    );

    return availableSlots;
  }

  isTimeSlotAvailable(slotsArray, startTime, endTime) {
    // Construir la franja horaria a partir de startTime y endTime
    const timeSlot = `${startTime}-${endTime}`;

    // Verificar si el timeSlot está en el arreglo de franjas horarias
    const result = slotsArray.includes(timeSlot);

    if (!result) {
      console.log("La franja horaria solicitada no está disponible");
      throw new CustomError("The requested time slot is not available", 400);
    }
  }
}

export default new AppointmentService();