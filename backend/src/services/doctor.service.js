import { doctorManager } from "../dao/index.dao.js";
import generateJWT from "../helpers/generateJwt.js";
import { comparePassword, hashPassword } from "../helpers/password.helper.js";

export class doctorService {
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
        throw new Error("All fields are required");
      }
      const existingUser = await doctorManager.findOne({ email });
      console.log(existingUser);
      if (existingUser) throw new Error("Doctor already exists");

      const hashedPassword = await hashPassword(password)

      const newDoctor = doctorManager.create({
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

      return newDoctor;
    } catch (error) {
      throw new Error("Error register Doctor: " + error.message)
    }
  }
}
