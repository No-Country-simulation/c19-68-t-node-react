import { doctorManager } from "../dao/index.dao.js";
import doctorService from "../services/doctor.service.js";

class DoctorController {
  async registerDoc(req, res) {
    const {
      photo,
      firstName,
      lastName,
      gender,
      email,
      password,
      professionalCertificates,
      speciality,
      phone,
      country,
      availability,
    } = req.body;

    try {
      const newDoctor = await doctorService.register(
        photo,
        firstName,
        lastName,
        gender,
        email,
        password,
        professionalCertificates,
        speciality,
        phone,
        country,
        availability
      );
      res.status(201).json(newDoctor);
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async logOutDoc(req, res) {
    try {
      res.status(200).json({ message: "logout doctor" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async editProfileDoc(req, res) {
    try {
      res.status(200).json({ message: "Edit doctor's profile" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async getDoc(req, res) {
    const { id } = req.params;
    try {
      res.status(200).json({ message: "show doctor by id", id });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async profileDoc(req, res) {
    try {
      res.status(200).json({ message: "doctor's profile" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  async getAllDoc(req, res) {
    try {
      const doctors = await doctorManager.findAll();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }
}

export default new DoctorController();