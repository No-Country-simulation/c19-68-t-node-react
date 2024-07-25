import { DoctorDao } from "../dao/doctor.dao.js";
import { doctorManager } from "../dao/index.dao.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { doctorService } from "../services/doctor.service.js";

const controllerDoc = {
  registerDoc: async (req, res) => {
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
      await new doctorService().register(
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
      res.status(201).json({message: "Successfully registered doctor"});
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: "Error registering doctor", error: error.message});
    }
  },

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
      const patients = await doctorManager.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default controllerDoc;
