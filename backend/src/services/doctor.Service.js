import { doctorManager } from "../dao/index.dao.js";
import generateJWT from "../helpers/generateJwt.js";

export class DoctorServices {
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
        const checkDoctor = {
          name: existingDoctor.name,
          email: existingDoctor.email,
          token: generateJWT(existingDoctor._id),
        };
        return checkDoctor;
      } else {
        throw new Error("Invalid password");
      }
    } catch (error) {
      throw new Error("Authentication Error: " + error.message);
    }
  }

  async confirm(token) {
    const doctorToConfirm = await doctorManager.findOne({ token });
    if (!doctorToConfirm) {
      throw new Error("Invalid Token");
    }
    doctorToConfirm.token = null;
    doctorToConfirm.confirmed = true;
    await doctorToConfirm.save();
    console.log("success token");
  }
}
