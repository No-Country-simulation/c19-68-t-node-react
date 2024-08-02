import { doctorManager } from "../dao/index.dao.js";
import { comparePassword, hashPassword } from "../helpers/password.helper.js";
import CustomError from "../middlewares/error.middleware.js";

class doctorService {
  async register(
    photo,
    firstName,
    lastName,
    gender,
    email,
    password,
    professionalCertificates,
    speciality,
    phone,
    country,
    availability
  ) {
    try {
      if (
        !firstName ||
        !lastName ||
        !email ||
        !password ||
        !professionalCertificates ||
        !speciality
      ) {
        throw new CustomError("All fields are required", 400);
      }

      const existingUser = await doctorManager.findOne({ email });

      if (existingUser) throw new CustomError("Doctor already exists", 409);

      const hashedPassword = await hashPassword(password);

      const newDoctor = await doctorManager.create({
        photo,
        firstName,
        lastName,
        gender,
        email,
        password: hashedPassword,
        professionalCertificates,
        speciality,
        phone,
        country,
        availability,
      });

      const credentials = await doctorManager.findOne({
        email: newDoctor.email,
      });

      return credentials;
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      } else {
        throw new CustomError(
          "Error registering Doctor: " + error.message,
          500
        );
      }
    }
  }
}

export default new doctorService();
