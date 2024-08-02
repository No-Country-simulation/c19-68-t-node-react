import { patientManager } from "../dao/index.dao.js";
import { hashPassword } from "../helpers/password.helper.js";
import CustomError from "../middlewares/error.middleware.js";

class PatientService {
  async registerPat(photo, 
                     firstName, 
                     lastName, 
                     gender, 
                     email, 
                     phone, 
                     password, 
                     country, 
                     creditCard, 
                     clinicalData) {
    try {
      if (!firstName || !lastName || !email || !password) {
        throw new CustomError("All fields are required", 400);
      }

      const existingPatient = await patientManager.findOne({ email });
      if (existingPatient) {
        throw new CustomError("Patient already exists", 409);
      }

      const hashedPassword = await hashPassword(password);

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

      const credentials = await patientManager.findOne({
        email: newPatient.email,
      });

      return credentials;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError("Error registering patient: " + error.message, 500);
      }
    }
  }
}

export default new PatientService();