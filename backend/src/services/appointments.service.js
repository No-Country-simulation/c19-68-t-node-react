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

            // Validar existencia del doctor y si existe, su estado
            await validateDoctorAndStatus(doctor_id);

            // Obtener la disponibilidad horaria actualizada del doctor
            const realAvailability = await getRealAvailability(doctor_id, date, date);

            // Verificar si la cita está dentro de la disponibilidad horaria actualizada del doctor
            await checkAvailability(realAvailability, date, startTime, endTime);

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

            //Si al doctor ya no le quedan mas citas disponibles, se cambia su estado a not_available
            if(realAvailability.length == 1){
              doctorManager.updateWithSession(doctor_id, {availabilityStatus: "not_available"}, session);
            }

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

async function validateDoctorAndStatus(doctor_id) {
  const doctor = await doctorManager.findById(doctor_id);
  if (!doctor) {
      console.error("ERROR: El doctor no existe");
      throw new Error("Doctor does not exist");
  }else if(doctor.availabilityStatus !== 'available'){
    console.error("ERROR: El doctor no está disponible");
    throw new Error("Doctor is not available");
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


async function checkAvailability(realAvailability, date, startTime, endTime) {
  // Verificar si la cita está dentro de la disponibilidad horaria actualizada del doctor
  const isAvailable = realAvailability.some(slot => 
    slot.date.toISOString() === date.toISOString() &&
    slot.startTime <= startTime &&
    slot.endTime >= endTime
  );

  if (!isAvailable) {
    console.error("ERROR: La franja horaria seleccionada no está disponible");
    throw new Error("The selected time slot is not available");
  }
}


const getRealAvailability = async (doctorId, startDate, endDate) => {

  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1); // Primer día del mes actual
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0); // Último día del mes actual

  // Obtener la disponibilidad general del doctor
  const doctor = await doctorManager.findById(doctorId);
  
  // Obtener citas dentro del rango de fechas
  const appointments = await appointmentsManager.findOne({ doctor_id: doctorId,
                                                           date: { $gte: startDate, $lte: endDate }
                                                         });

  // Convertir disponibilidad general a un arreglo
  let generalAvailability = [];
  doctor.availability.forEach(block => {
    if (block.startDate <= endDate && block.endDate >= startDate) {
      block.timeSlots.forEach(slot => {
        let currentDate = new Date(block.startDate);
        while (currentDate <= block.endDate) {
          if (currentDate >= startDate && currentDate <= endDate) {
            generalAvailability.push({
              date: new Date(currentDate),
              startTime: slot.startTime,
              endTime: slot.endTime,
            });
          }
          currentDate.setDate(currentDate.getDate() + 1);
        }
      });
    }
  });

  // Restar citas de la disponibilidad general
  appointments.forEach(appointment => {
    generalAvailability = generalAvailability.filter(
      slot => !(slot.date.toISOString() === appointment.date.toISOString() && slot.startTime === appointment.startTime)
    );
  });

  return generalAvailability;
};


export default serviceAppo;