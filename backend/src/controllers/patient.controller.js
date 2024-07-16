import { PatientDao } from "../dao/patient.dao.js";

const controllerPat = {
  registerPat: async (req, res) => {
    try {
      const patient = await PatientDao.create(req.body);
      res.status(201).json({ message: "Created succesfully", paciente: patient });
    } catch (error) {
      res.status(500).json({ message: error.message})
    }
  },

  logInPat: async (req, res) => {
    const { email, password } = req.body;
    res
      .status(200)
      .json({ message: "login the patient succesfully", email, password });
  },

  logOutPat: async (req, res) => {
    res.status(200).json({ message: "logout patient" });
  },

  editProfilePat: async (req, res) => {
    res.status(200).json({ message: "Edit patient's profile" });
  },

  getPatId: async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: "show patients by id", id });
  },

  profilePat: async (req, res) => {
    res.status(200).json({ message: "doctor's profile" });
  },

  getAllPat: async (req, res) => {
    try {
      const patients = await PatientDao.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default controllerPat;