import { DoctorDao } from "../dao/doctor.dao.js";
import { doctorManager } from "../dao/index.dao.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import { doctorService } from "../Services/doctor.Service.js";

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
      attentionSchedule,
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
        attentionSchedule
      );
      res.status(201).send("Successfully registered doctor");
    } catch (error) {
      res.status(500).send("Error registering doctor");
    }
  },

  login: asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    const loggedDoctor = await new doctorService().login(email, password);
    if(!loggedDoctor) {
      return res.status(403).json({msg: "Authentication Error"})
    }
    res.status(200).json(loggedDoctor);
  }),

  confirm: asyncHandler(async(req, res) => {
    const {token} = req.params;
    const confirmedDoctor = await new doctorService().confirm(token);
    if(!confirmedDoctor) {
      return res.status(401).json({msg: "Token error ", error: error.message});
    }
    res.json({msg: "Succesfully confirmed user"});
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
      const patients = await doctorManager.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default controllerDoc;
