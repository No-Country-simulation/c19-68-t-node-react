import { doctorManager, patientManager } from "../dao/index.dao.js";
import { comparePassword} from "../helpers/password.helper.js";
import CustomError from "../middlewares/error.middleware.js";

class AuthService {
  async login(email, password) {
    try {
      if(!email || !password) {
        throw new CustomError("Email and password are required", 400);
      }

      const existingDoctor = await doctorManager.findOne({email});
      const existingPatient = await patientManager.findOne({email});

      if(!existingDoctor && !existingPatient) {
        throw new CustomError("User does not exist", 404);
      }

      const user = existingDoctor || existingPatient;
      
      if(!user.confirmed) {
        throw new CustomError("Your account has not been confirmed", 403);
      }
      // se guarda rol en user
      user.rol = existingDoctor ? 'doctor' : 'paciente';

      const isPasswordCorrect = await comparePassword(password, user.password);
      if(!isPasswordCorrect) {
        throw new CustomError("Invalid password", 401);
      }
      return user;
    } catch(error) {
      throw new CustomError("Authentication Failed: " + error.message, 500);
    }
  }

  async confirm(confirmationString) {
    try {
      if (!confirmationString) {
        throw new CustomError("Confirmation string is required", 400);
      }

      const doctorToConfirm = await doctorManager.findOne({confirmationString});
      const pacientToConfirm = await patientManager.findOne({confirmationString});

      const userToConfirm = doctorToConfirm || pacientToConfirm;

      if(!userToConfirm) {
        throw new CustomError("Invalid Confirmation Code", 401);
      }

      userToConfirm.confirmationString = null;
      userToConfirm.confirmed = true;
      const confirmedUser = await userToConfirm.save();
      return confirmedUser;      
    } catch (error) {
      throw new CustomError("Token Error: " + error.message, 500);
    }
  }
}

export default new AuthService();