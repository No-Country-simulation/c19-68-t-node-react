import { patientManager } from "../dao/index.dao.js";
import servicePat from '../services/patients.service.js';

class PatientController {
  async registerPat(req, res) {
    const { photo, firstName, lastName, gender, email, phone, password, country, creditCard, clinicalData } = req.body;

    try {
      const patient = await servicePat.registerPat(photo, firstName, lastName, gender, email, phone, password, country, creditCard, clinicalData);
      res.status(201).json({ message: "Successfully registered patient", paciente: patient });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async logInPat(req, res) {
    const { email, password } = req.body;
    try {
      // Lógica de login aquí...
      res.status(200).json({ message: "login the patient successfully", email, password });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async logOutPat(req, res) {
    try {
      res.status(200).json({ message: "logout patient" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async editProfilePat(req, res) {
    try {
      res.status(200).json({ message: "Edit patient's profile" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async getPatId(req, res) {
    const { id } = req.params;
    try {
      res.status(200).json({ message: "show patients by id", id });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async profilePat(req, res) {
    try {
      res.status(200).json({ message: "patient's profile" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async getAllPat(req, res) {
    try {
      const patients = await patientManager.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
}

export default new PatientController();