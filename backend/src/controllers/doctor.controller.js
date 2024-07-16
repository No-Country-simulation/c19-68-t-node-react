import { DoctorDao } from "../dao/doctor.dao.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import generateJWT from "../helpers/generateJwt.js";
import bcrypt from "bcrypt";

const controllerDoc = {
  registerDoc: async (req, res) => {
    try {
      const doctor = await DoctorDao.create(req.body);
      res
        .status(200)
        .json({ message: "Created succesfully", paciente: doctor });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error creating doctor", error: error.message });
    }
  },

  login: asyncHandler(async (req, res) => {
    const { mail, pass } = req.body;
    //Validate empty inputs
    if (!mail || !pass) {
      const error = new Error("Please, fill email and password fields");
      return res.status(403).json({ msg: error.message });
    }

    //Check if doctor exist
    const existingDoctor = await Doc.findOne({ mail });
    if (!existingDoctor) {
      const error = new Error("Doctor already exist");
      return res.status(403).json({ msg: error.message });
    }

    //Check if doctor account is confirmed
    if (!existingDoctor.confirmed) {
      const error = new Error("Your account has not been confirmed");
      return res.status(403).json({ msg: error.message });
    }

    //Check doctor Password
    if (await existingDoctor.checkPassword(pass)) {
      res.json({
        name: existingDoctor.name,
        mail: existingDoctor.mail,
        token: generateJWT(existingDoctor._id),
      });
    } else {
      const error = new Error("Invalid password");
      return res.status(403).json({ msg: error.message });
    }
  }),

  logOutDoc: async (req, res) => {
    res.status(200).json({ message: "logout doctor" });
  },

  editProfileDoc: async (req, res) => {
    res.status(200).json({ message: "Edit doctor's profile" });
  },

  getDoc: async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: "show doctor by id", id });
  },

  profileDoc: async (req, res) => {
    res.status(200).json({ message: "doctor's profile" });
  },

  getAllDoc: async (req, res) => {
    try {
      const patients = await DoctorDao.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  confirm: asyncHandler(async (req, res) => {
    const { token } = req.params;
    const doctorToConfirm = await Doc.findOne({ token });
    if (!doctorToConfirm) {
      const error = new Error("Invalid Token");
      return res.status(400).json({ msg: error.message });
    }
    doctorToConfirm.token = null;
    doctorToConfirm.confirmed = true;
    await doctorToConfirm.save();
    res.json({ msg: "Successfully confirmed user" });
  }),
};

export default controllerDoc;
