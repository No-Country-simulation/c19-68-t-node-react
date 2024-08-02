import { doctorManager } from "../dao/index.dao.js";
import doctorService from "../services/doctor.service.js";

const doctorController = {
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

      res.status(201).json({ id: newDoctor._id, rol: "doctor" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async logOutDoc(req, res) {
    try {
      res.status(200).json({ message: "Doctor logged out successfully" });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async editProfileDoc(req, res) {
    const { id } = req.params;
    const update = req.body
  
    try {
      const updateDoctor = await doctorManager.update(id, update);

      if (!updateDoctor) {
        return res.status(404).send({ message: "ID not found" });
      }

      res.status(200).json({ message: "Doctor's profile edited successfully", updateDoctor });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getDoc(req, res) {
    const { id } = req.params;
    try {
      const doctor = await doctorManager.findById(id);
      res
        .status(200)
        .json({ message: "Doctor retrieved successfully", doctor });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async profileDoc(req, res) {
    const { id } = req.params;
    try {
      const doctor = await doctorManager.findById(id);
      res
        .status(200)
        .json({ message: "Doctor's profile retrieved successfully", doctor });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },

  async getAllDoc(req, res) {
    try {
      const doctors = await doctorManager.findAll();
      res
        .status(200)
        .json({ message: "All doctors retrieved successfully", doctors });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },
};

export default doctorController;
