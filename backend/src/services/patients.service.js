import { patientManager } from "../dao/index.dao.js";
import { hashPassword } from "../helpers/password.helper.js";


const servicePat = {

    registerPat: async (photo, 
                         firstName, 
                         lastName, 
                         gender, 
                         email, 
                         phone, 
                         password, 
                         country, 
                         creditCard, 
                         clinicalData) => {

        try {

            //Validamos los datos obligatorios
            if ( !firstName || !lastName || !email || !phone || !password ) {
                console.log(firstName + lastName + email + phone + password);
                console.error("ERROR: Datos requeridos no recibidos");
                throw new Error("All fields are required");
            }

            // Verificar si el paciente ya existe
            const patientExists = await patientManager.findOne({ email: email });
            if (patientExists) {
                console.error("ERROR: El paciente ya está registrado");
                throw new Error("Patient already exists");
            }

            // Hash de la contraseña
            const hashedPassword = await hashPassword(password);

            //Grabamos el modelo Patient
            const newPatient = await patientManager.create({
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
            });

            console.log("Registro exitoso del paciente");
            return newPatient;

        } catch (error) {
            throw new Error("Error register Patient: " + error.message);
        }
    }
}

export default servicePat;