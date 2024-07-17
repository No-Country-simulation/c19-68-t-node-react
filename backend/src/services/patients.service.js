import bcrypt from 'bcrypt';
import patientDAO from '../dao/patient.dao.js';


const servicePat = {

    registerPat: async ({photo, 
                         firstName, 
                         lastName, 
                         gender, 
                         email, 
                         phone, 
                         password, 
                         country, 
                         creditCard, 
                         clinicalData}) => {

        try {

            // Verificar si el paciente ya existe
            const patientExists = await patientDAO.findByMail(email);
            if (patientExists) {
                console.error("ERROR: El paciente ya está registrado");
                //return res.status(400).send("ERROR: El paciente ya está registrado");
                throw new Error("El paciente ya está registrado");
            }

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
            const patient = await patientDAO.create(newPatient);

            console.log("Registro exitoso del paciente");
            return patient;

        } catch (error) {
            throw error;
        }
    }
}

export default servicePat;


/*
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

export default new PatientService();*/