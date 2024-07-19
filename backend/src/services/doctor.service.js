import { doctorManager } from "../dao/index.dao.js";
import generateJWT from "../helpers/generateJwt.js";
import { comparePassword, hashPassword } from "../helpers/password.helper.js";

export class doctorService {
  async confirm(token) {
    try {
      const doctorToConfirm = await doctorManager.findOne({token});
      if (!doctorToConfirm) {
        throw new Error("Invalid Token");
      }
      doctorToConfirm.token = null;
      doctorToConfirm.confirmed = true;
      const confirmedDoctor = await doctorToConfirm.save();
      return confirmedDoctor;
    } catch (error) {
      throw new Error("Token Error: " + error.message);
    }
  }

  async login(email, password) {
    try {
      if (!email || !password) {
        throw new Error("Please, fill email and password fields");
      }

      //Check if doctor exist
      const existingDoctor = await doctorManager.findOne({ email });
      if (!existingDoctor) {
        throw new Error("Doctor does not exist");
      }

      //Check if doctor account is confirmed
      if (!existingDoctor.confirmed) {
        throw new Error("Your account has not been confirmed");
      }

      //Check doctor Password
      if (await comparePassword(password, existingDoctor.password)) {
        const doctorCredentials = {
          firstName: existingDoctor.firstName,
          lastName: existingDoctor.lastName,
          email: existingDoctor.email,
          token: generateJWT(existingDoctor._id),
        };
        return doctorCredentials;
      } else {
        throw new Error("Invalid password");
      }
    } catch (error) {
      throw new Error("Authentication Error: " + error.message);
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
        attentionSchedule,
      });

      return newDoctor;
    } catch (error) {
      throw new Error("Error register Doctor: " + error.message)
    }
  }
}
