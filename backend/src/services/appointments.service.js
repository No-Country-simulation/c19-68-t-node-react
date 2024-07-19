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
            await validateDoctor(doctor_id);

             // Verificar si hay solapamiento en la cita del doctor
             await validateAppointmentDoctor(doctor_id, date, startTime, endTime);           

            // Verificar si hay solapamiento en la cita del paciente
            await validateAppointment(patient_id, date, startTime, endTime);

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
            return newAppointment;

        } catch (error) {
            throw new Error("Error register Appointment: " + error.message);
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
}

async function validateAppointment(patient_id, date, startTime, endTime) {
  const appointmentExists = await appointmentsManager.findOne({ patient_id: patient_id,
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
    console.error("ERROR: El horario de la cita ya está ocupado");
    throw new Error("Appointment time is already booked");
  }
}


async function validateAppointmentDoctor(doctor_id, date, startTime, endTime) {
  const appointmentExists = await appointmentsManager.findOne({ doctor_id: doctor_id,
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
    console.error("ERROR: El horario de la cita ya está ocupado");
    throw new Error("Appointment time is already booked");
  }
}

export default serviceAppo;