import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import PatientDAO from '../dao/patient.dao.js';


class PatientService {

    async registerPacient({
        photo, 
        firstName, 
        lastName, 
        gender, 
        email, 
        phone, 
        password, 
        country, 
        creditCard, 
        clinicalData
    }) {

        try {

            // Verificar si el paciente ya existe
            const patientExists = await PatientDAO.findByMail(email);
            if (patientExists) {
                console.error("ERROR: El paciente ya está registrado");
                //return res.status(400).send("ERROR: El paciente ya está registrado");
                throw new Error("El paciente ya está registrado");
            }

            //Grabamos el modelo PatientInfo
            const newPatientInfo = {
                photo, 
                firstName, 
                lastName, 
                gender, 
                email, 
                phone, 
                password, 
                country, 
                creditCard, 
                clinicalData
            };

            // Hash de la contraseña
            const hashedPassword = await bcrypt.hash(password, 10);

            //Grabamos el modelo Patient
            const newPatient = {
                photo, 
                firstName, 
                lastName, 
                gender, 
                email, 
                phone, 
                password: hashedPassword,
                country, 
                creditCard, 
                clinicalData
            };
            await PatientDAO.create(newPatient);

            console.log("Registro exitoso del paciente");

        } catch (error) {
            throw error;
        }
    }
}

export default new PatientService();