import { doctorManager } from "../dao/index.dao.js";
import generateJWT from "../helpers/generateJwt.js";
import bcrypt from "bcrypt";

export class doctorService {
  async confirmed(token){
    try {
      const doctorToConfirm = await doctorManager.findOne({ token });
    if (!doctorToConfirm) {
      throw new Error("Invalid Token")
    }
    doctorToConfirm.token = null;
    doctorToConfirm.confirmed = true;
    await doctorToConfirm.save();
    } catch (error) {
      throw new Error("Token Error: " + error.message)
    }
  }
  async login(email, pass) {
    try {
      if (!email || !pass) {
        throw new Error("Please, fill email and password fields");
      }

      //Check if doctor exist
      const existingDoctor = await doctorManager.findOne({ email });
      if (!existingDoctor) {
        throw new Error("Doctor already exist");
      }

      //Check if doctor account is confirmed
      if (!existingDoctor.confirmed) {
        throw new Error("Your account has not been confirmed");
      }

      //Check doctor Password
      if (await existingDoctor.checkPassword(pass)) {
        const doctorCredentials = {
          name: existingDoctor.name,
          mail: existingDoctor.mail,
          token: generateJWT(existingDoctor._id),
        };
        return doctorCredentials;
      } else {
        throw new Error("Invalid password")
      }
    } catch (error) {
      throw new Error("Authentication Error: " + error.message)
    }
  }
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
    attentionSchedule
  ) {
    try {
      const saltRounds = 10;

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
      if (existingUser) throw new Error("All fields must be completed");

      const hashedPassword = await bcrypt.hash(password, saltRounds);

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
        attentionSchedule,
      });

      return newDoctor;
    } catch (error) {}
  }
}
