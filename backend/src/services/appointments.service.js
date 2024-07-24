import mongoose from "mongoose";
import { appointmentsManager, patientManager, doctorManager } from "../dao/index.dao.js";


const serviceAppo = {

    registerAppo: async (patient_id, 
                         doctor_id,
                         date,
                         startTime,
                         endTime, 
                         video_call_link,
                         reasons, 
                         notes) => {

        const session = await mongoose.startSession();
        session.startTransaction();

        try {

            //Validamos los datos obligatorios
            if ( !patient_id || !doctor_id || !date || !startTime || !endTime || !video_call_link || !reasons ||!notes ) {
                console.error("ERROR: Datos requeridos no recibidos");
                throw new Error("All fields are required");
            }

            // Validar existencia del paciente
            await validatePatient(patient_id);

            // Validar existencia del doctor
            await validateDoctor(doctor_id);

            // Buscamos la disponibilidad general del doctor para el día específico
            const doctorTimeSlots = await getDoctorTimeSlotsForDate(doctor_id, date);

            // Buscamos las citas del doctor para el dia especifico
            const doctorAppo = await getAppoinmentsForDate(doctor_id, date);

            //Obtenemos las horas disponibles del doctor para el dia especifico
            const availableTimeSlots = await getAvailableTimeSlots(doctorTimeSlots, doctorAppo);

            


            //Validar solo una cita x dia con un doctor
            await verifyQuantityAppointmentsPerDay(patient_id, doctor_id, date);

            // Verificar solapamiento para paciente y doctor
            await validateAppointment(patient_id, doctor_id, date, startTime, endTime);

            //Grabamos el modelo Appointment
            const newAppointment = await appointmentsManager.createWithSession({
                patient_id, 
                doctor_id,
                date,
                startTime,
                endTime, 
                state: "confirmed",
                video_call_link, 
                reasons, 
                notes
              },
              session
            );

            console.log("Registro exitoso de la cita");

            await session.commitTransaction();
            session.endSession();

            return newAppointment;

        } catch (error) {
            await session.abortTransaction();
            session.endSession();
            throw new Error(error.message);
        }
    }
}

async function validatePatient(patient_id) {
  const isPatientValid = await patientManager.findById(patient_id);
  if (!isPatientValid) {
      console.error("ERROR: El paciente no existe");
      throw new Error("Patient does not exist");
  }
}

async function validateDoctor(doctor_id) {
  const doctor = await doctorManager.findById(doctor_id);
  if (!doctor) {
      console.error("ERROR: El doctor no existe");
      throw new Error("Doctor does not exist");
  }
}

async function validateAppointment(patient_id, doctor_id, date, startTime, endTime) {

  // Verificar solapamiento para el paciente
  let appointmentExists = await appointmentsManager.findOne({ patient_id: patient_id,
                                                                date: date,
                                                                $or: [
                                                                  { 
                                                                    $and: [
                                                                      { startTime: { $lte: startTime } },
                                                                      { endTime: { $gt: startTime } }
                                                                    ]
                                                                  },
                                                                  {
                                                                    $and: [
                                                                      { startTime: { $lt: endTime } },
                                                                      { endTime: { $gte: endTime } }
                                                                    ]
                                                                  }
                                                                ]
                                                              });
  if (appointmentExists) {
    console.error("ERROR: El paciente ya tiene una cita programada en este horario");
    throw new Error("The patient already has an appointment scheduled at this time");
  }


  // Verificar solapamiento para el doctor
  appointmentExists = await appointmentsManager.findOne({ doctor_id: doctor_id,
                                                          date: date,
                                                          $or: [
                                                            { 
                                                              $and: [
                                                                { startTime: { $lte: startTime } },
                                                                { endTime: { $gt: startTime } }
                                                              ]
                                                            },
                                                            {
                                                              $and: [
                                                                { startTime: { $lt: endTime } },
                                                                { endTime: { $gte: endTime } }
                                                              ]
                                                            }
                                                          ]
                                                        });
  if (appointmentExists) {
    console.error("ERROR: El doctor ya tiene una cita programada en este horario");
    throw new Error("The doctor already has an appointment scheduled at this time");
  } 

}


async function verifyQuantityAppointmentsPerDay(patient_id, doctor_id, date) {
  // Contar las citas existentes para el paciente con el doctor en el día específico
  const cantidadCitas = await appointmentsManager.findOne({ patient_id: patient_id,
                                                            doctor_id: doctor_id,
                                                            date: date
                                                          });

  if(cantidadCitas){
    console.error("ERROR: El paciente ya tiene una cita con este doctor en este día");
    throw new Error("The patient already has an appointment with this doctor on this day");    
  }
}



const getDoctorTimeSlotsForDate = async (doctorId, targetDate) => {
  // Convertir la fecha objetivo a un formato de solo fecha (sin hora)
  const date = new Date(targetDate);
  const startOfDay = new Date(date.setHours(0, 0, 0, 0));
  const endOfDay = new Date(date.setHours(23, 59, 59, 999));

  try {
    // Buscar su disponibilidad para el día específico
    const doctor = await doctorManager.findOne({
      _id: doctorId,
      'availability.startDate': { $lte: endOfDay },
      'availability.endDate': { $gte: startOfDay }
    });

    if (!doctor) {
      console.log("No hay horario disponible para esa fecha");
      throw new Error("There is no time available for that date");
    }

    const timeSlots = doctor.availability[0].timeSlots;
    console.log("timeSlots --> " + timeSlots);
    return timeSlots;

  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

const getAppoinmentsForDate = async (doctorId, targetDate) => {
  console.log("targetDate --> " + targetDate);

  try {
    // Buscar las citas del doctor para el día específico
    const appo = await appointmentsManager.find({
      doctor_id: doctorId,
      date: targetDate
    });

    return appo;

  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

const getAvailableTimeSlots = (generalSlots, bookedSlots) => {
  // Helper function to check if a time slot is within the booked slots
  const isSlotBooked = (slot, bookedSlots) => {
    return bookedSlots.some(booked => 
      slot === `${booked.startTime}-${booked.endTime}`
    );
  };

  // Filter out the booked slots from the general slots
  const availableSlots = generalSlots.filter(slot => !isSlotBooked(slot, bookedSlots));

  return availableSlots;
};


export default serviceAppo;