import { appointmentsManager, patientManager, doctorManager } from "../dao/index.dao.js";


const serviceAppo = {

    registerAppo: async (patient_id, 
                         doctor_id,
                         date_hour, 
                         video_call_link, 
                         reasons, 
                         notes) => {

        try {

            //Validamos los datos obligatorios
            if ( !patient_id || !doctor_id || !date_hour || !video_call_link || !reasons ||!notes ) {
                console.error("ERROR: Datos requeridos no recibidos");
                throw new Error("All fields are required");
            }

            // Validar existencia del paciente
            await validatePatient(patient_id);

            // Validar existencia del doctor
            await validateDoctor(doctor_id);

            // Verificar si la cita ya existe
            await validateAppointment(doctor_id, date_hour);

            /*
    const citaExistente = await Cita.findOne({
      doctor: nuevaCita.doctor,
      fecha: nuevaCita.fecha,
      $or: [
        { 
          $and: [
            { horaInicio: { $lte: nuevaCita.horaInicio } },
            { horaFin: { $gt: nuevaCita.horaInicio } }
          ]
        },
        {
          $and: [
            { horaInicio: { $lt: nuevaCita.horaFin } },
            { horaFin: { $gte: nuevaCita.horaFin } }
          ]
        }
      ]
    });
            */

            //Grabamos el modelo Appointment
            const newAppointment = await appointmentsManager.create({
                patient_id, 
                doctor_id,
                date_hour, 
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

async function validateAppointment(doctor_id, date_hour) {
  const appointmentExists = await appointmentsManager.findOne({ doctor_id: doctor_id,
                                                                date_hour: date_hour
                                                              });
  if (appointmentExists) {
    console.error("ERROR: La cita ya está registrada");
    throw new Error("Appoinment already exists");
  }
}

export default serviceAppo;