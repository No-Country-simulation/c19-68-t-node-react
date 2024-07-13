import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import PatientDAO from '../dao/patient.dao.js';
import PatientInfoDAO from '../dao/patientInfo.dao.js';


class PatientService {

    async registerPacient({
        name,
        mail,
        pass,
        phone,
        address,
        birthdate,
        emergencyContact,
        healthInsurance,
        bloodType,
        allergies,
        currentMedications,
        medicalHistory
    }) {

        // Iniciamos una sesión de MongoDB
        const session = await mongoose.startSession();
        //Iniciamos la transaccion
        session.startTransaction();

        try {

            // Verificar si el paciente ya existe
            const patientExists = await PatientDAO.findByMail(mail);
            if (patientExists) {
                console.error("ERROR: El paciente ya está registrado");
                //return res.status(400).send("ERROR: El paciente ya está registrado");
                throw new Error("El paciente ya está registrado");
            }

            //Grabamos el modelo PatientInfo
            const newPatientInfo = {
                address,
                birthdate,
                emergencyContact,
                healthInsurance,
                bloodType,
                allergies,
                currentMedications,
                medicalHistory
            };
            let patientInfoSaved = await PatientInfoDAO.create([newPatientInfo], {session});
            console.log("Registro exitoso en PatientInfo, el ID es: " + patientInfoSaved[0]._id);

            // Hash de la contraseña
            const hashedPassword = await bcrypt.hash(pass, 10);

            //Grabamos el modelo Patient
            const newPatient = {
                name,
                mail,
                pass: hashedPassword,
                phone,
                patientInfoID: patientInfoSaved[0]._id
            };
            await PatientDAO.create(newPatient, session);

            // Commit de la transacción
            await session.commitTransaction();
            session.endSession();

            console.log("Registro exitoso del paciente");

        } catch (error) {
            // Rollback de la transacción en caso de error
            await session.abortTransaction();
            session.endSession();

            console.error("Se realizó ROLLBACK exitosamente");
            throw error;
        }
    }
}

export default new PatientService();