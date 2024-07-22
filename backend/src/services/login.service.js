import { doctorManager } from "../dao/index.dao.js";
import { patientManager } from "../dao/index.dao.js";
import generateJWT from "../helpers/generateJwt.js";
import { comparePassword, hashPassword } from "../helpers/password.helper.js";

export class loginService {
  async confirm(token) {
    try {
      const doctorToConfirm = await doctorManager.findOne({ token });
      const patientToConfirm = await patientManager.findOne({ token });

      if (!doctorToConfirm && !patientToConfirm) {
        throw new Error("Invalid Token");
      }

      if (doctorToConfirm) {
        doctorToConfirm.token = null;
        doctorToConfirm.confirmed = true;
        const confirmedDoctor = await doctorToConfirm.save();
        return confirmedDoctor;
      }

      if (patientToConfirm) {
        patientToConfirm.token = null;
        patientToConfirm.confirmed = true;
        const confirmedPatient = await patientToConfirm.save();
        return confirmedPatient;
      }
    } catch (error) {
      throw new Error("Token Error: " + error.message);
    }
  }

  async login(email, password) {
    try {
      if (!email || !password) {
        throw new Error("Please, fill email and password fields");
      }

      const existingDoctor = await doctorManager.findOne({ email });
      const existingPatient = await patientManager.findOne({ email });

      if (!existingDoctor && !existingPatient) {
        throw new Error("User does not exist");
      }

      let user;
      if (existingDoctor) {
        user = existingDoctor;
      } else if (existingPatient) {
        user = existingPatient;
      }

      if (!user.confirmed) {
        throw new Error("Your account has not been confirmed");
      }

      if (await comparePassword(password, user.password)) {
        const credentials = {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          token: generateJWT(user._id),
          role: existingDoctor ? 'doctor' : 'patient'
        };
        return credentials;
      } else {
        throw new Error("Invalid password");
      }
    } catch (error) {
      throw new Error("Authentication Error: " + error.message);
    }
  }
}
