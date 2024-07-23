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

        try {

            //Validamos los datos obligatorios
            if ( !patient_id || !doctor_id || !date || !startTime || !endTime || !video_call_link || !reasons ||!notes ) {
                console.error("ERROR: Datos requeridos no recibidos");
                throw new Error("All fields are required");
            }

            // Validar existencia del paciente
            await validatePatient(patient_id);

            // Validar existencia del doctor
            const doctor = await validateDoctor(doctor_id);

            //Validar solo una cita x dia con un doctor
            await verifyQuantityAppointmentsPerDay(patient_id, doctor_id, date);

            // Verificar solapamiento para paciente y doctor
            await validateAppointment(patient_id, doctor_id, date, startTime, endTime);

            //Grabamos el modelo Appointment
            const newAppointment = await appointmentsManager.create({
                patient_id, 
                doctor_id,
                date,
                startTime,
                endTime, 
                state: "confirmed",
                video_call_link, 
                reasons, 
                notes
            });

            console.log("Registro exitoso de la cita");

            // Actualizamos la disponibilidad del doctor
            const updatedAvailability = updateAvailability(doctor.availability, { date, startTime, endTime });
            doctor.availability = updatedAvailability;
            await doctor.save();

            return newAppointment;

        } catch (error) {
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
  const isDoctorValid = await doctorManager.findById(doctor_id);
  if (!isDoctorValid) {
      console.error("ERROR: El doctor no existe");
      throw new Error("Doctor does not exist");
  }
  return isDoctorValid;
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


/**
 * Actualiza la disponibilidad de un doctor en función de una cita.
 * @param {Array} availability - La disponibilidad actual del doctor.
 * @param {Object} appointment - La cita reservada.
 * @returns {Array} - La nueva disponibilidad actualizada.
 */
function updateAvailability(availability, appointment) {
  const { date, startTime, endTime } = appointment;
  const appointmentTimeSlot = `${startTime}-${endTime}`;
  
  return availability.reduce((updatedAvailability, block) => {
      const { startDate, endDate, timeSlots } = block;

      // Convertir las fechas a cadenas para comparación
      const startDateString = new Date(startDate).toISOString().split('T')[0];
      const endDateString = new Date(endDate).toISOString().split('T')[0];
      const appointmentDateString = new Date(date).toISOString().split('T')[0];

      // Si el bloque no incluye la fecha de la cita, se mantiene igual
      if (appointmentDateString < startDateString || appointmentDateString > endDateString) {
          updatedAvailability.push(block);
          return updatedAvailability;
      }

      // Si el bloque incluye la fecha de la cita, se necesita actualizarlo
      let updatedTimeSlots = timeSlots;

      // Eliminar la franja horaria de la disponibilidad
      if (appointmentDateString >= startDateString && appointmentDateString <= endDateString) {
          updatedTimeSlots = timeSlots.filter(timeSlot => timeSlot !== appointmentTimeSlot);
      }

      // Agregar bloques actualizados
      if (startDateString < appointmentDateString) {
          updatedAvailability.push({
              startDate: startDateString,
              endDate: appointmentDateString,
              timeSlots: timeSlots
          });
      }

      if (startDateString <= appointmentDateString && endDateString >= appointmentDateString) {
          updatedAvailability.push({
              startDate: appointmentDateString,
              endDate: appointmentDateString,
              timeSlots: updatedTimeSlots
          });
      }

      if (endDateString > appointmentDateString) {
          updatedAvailability.push({
              startDate: new Date(new Date(date).setDate(new Date(date).getDate() + 1)).toISOString().split('T')[0],
              endDate: endDateString,
              timeSlots: timeSlots
          });
      }

      return updatedAvailability;
  }, []);
}


export default serviceAppo;