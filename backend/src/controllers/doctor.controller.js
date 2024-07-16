import { DoctorDao } from "../dao/doctor.dao.js";
import bcrypt from "bcrypt";

const controllerDoc = {
  registerDoc: async (req, res) => {
    try {
      const doctor = await DoctorDao.create(req.body);
      res.status(200).json({ message: "Created succesfully", paciente: doctor });
    } catch (error) {
      res.status(500).json({ message: "Error creating doctor", error: error.message });
    }
  },

  logInDoc: async (req, res) => {
    const { email, password } = req.body;
    res
      .status(200)
      .json({ message: "login the doctor succesfully", email, password });
  },

  logOutDoc: async (req, res) => {
    res.status(200).json({ message: "logout doctor" });
  },
  editProfileDoc: async (req, res) => {
    res.status(200).json({ message: "Edit doctor's profile" });
  },

  getDoc: async (req, res) => {
    const { id } = req.params
    res.status(200).json({ message: "show doctor by id", id});
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
};

export default controllerDoc;