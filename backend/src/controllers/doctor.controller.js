import { DoctorServices } from "../Services/doctor.Service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const controllerDoc = {
  login: asyncHandler(async (req, res) => {
    const { email, pass } = req.body;
    try {
      res.status(200).json(await new DoctorServices().login(email.pass));
    } catch (error) {
      res
        .status(400)
        .json({ message: "Email or Password is Wrong", error: error.message });
    }
  }),

  confirm: asyncHandler(async (req, res) => {
    const { token } = req.params;
    try {
      await new DoctorServices().confirm(token);
      res.json({ msg: "Successfully confirmed user" });
    } catch (error) {
      res.status(401).json({ message: "Invalid token", error: error.message });
    }
  }),
};

export default controllerDoc;
