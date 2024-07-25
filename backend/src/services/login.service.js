import { doctorManager, patientManager } from "../dao/index.dao.js";
import { comparePassword, hashPassword } from "../helpers/password.helper.js";

export class loginService {
  async login(email, password) {
    try {
      if(!email || !password) {
        throw new Error("Please, fill email and password inputs", 400);
      }

      const existingDoctor = await doctorManager.findOne({email});
      const existingPatient = await patientManager.findOne({email});

      if(!existingDoctor && !existingPatient) {
        throw new Error("User does not exist", 404);
      }

      const user = existingDoctor || existingPatient;

      if(!user.confirmed) {
        throw new Error("Your account has not been confirmed", 403);
      }

      const isPasswordCorrect = await comparePassword(password, user.password);
      if(!isPasswordCorrect) {
        throw new Error("Invalid password", 401);
      }
      return user;
    } catch(error) {
      throw new Error("Authentication Failed: " + error.message);
    }
  }

  async confirm(confirmationString) {
    try {
      const doctorToConfirm = await doctorManager.findOne({confirmationString});
      const pacientToConfirm = await patientManager.findOne({confirmationString});

      const userToConfirm = doctorToConfirm || pacientToConfirm;

      if(!userToConfirm) {
        throw new Error("Invalid Confirmation Code");
      }

      userToConfirm.confirmationString = null;
      userToConfirm.confirmed = true;
      const confirmedUser = await userToConfirm.save();
      return confirmedUser;      
    } catch (error) {
      throw new Error("Token Error: " + error.message);
    }
  }
}