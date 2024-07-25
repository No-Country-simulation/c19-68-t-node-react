import { patientManager } from "../dao/index.dao.js";
import servicePat from "../services/patients.service.js";

const patientController = {
  async registerPat(req, res) {
    const {
      photo,
      firstName,
      lastName,
      gender,
      email,
      phone,
      password,
      country,
      creditCard,
      clinicalData,
    } = req.body;

    try {
      const patient = await servicePat.registerPat(
        photo,
        firstName,
        lastName,
        gender,
        email,
        phone,
        password,
        country,
        creditCard,
        clinicalData
      );
      res.status(201).json({
        message: "Successfully registered patient",
        paciente: patient,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async logInPat(req, res) {
    const { email, password } = req.body;
    try {
      // Lógica de login aquí...
      res
        .status(200)
        .json({ message: "login the patient successfully", email, password });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async logOutPat(req, res) {
    try {
      res.status(200).json({ message: "logout patient" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async editProfilePat(req, res) {
    const { id } = req.params;
    try {
      const updatePatient = await patientManager.update(id, req.body);
      res.status(200).json({
        message: "Doctor's profile edited successfully",
        updatePatient,
      });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getPatId(req, res) {
    const { id } = req.params;
    try {
      const patient = await patientManager.findById(id);
      res.status(200).json({ message: "show patients by id", patient });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async profilePat(req, res) {
    const { id } = req.params;
    try {
      const patient = await patientManager.findById(id);
      res
        .status(200)
        .json({ message: "Doctor's profile retrieved successfully", patient });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getAllPat(req, res) {
    try {
      const patients = await patientManager.findAll();
      res
        .status(200)
        .json({ message: "Get all patient successfully", patients });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },
};

export default patientController;
