import { DoctorDao } from "../dao/doctor.dao.js";
import bcrypt from "bcrypt";

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

    const saltRounds = 10;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !professionalCertificates ||
      !speciality
    ) {
      return res.status(400).send("All fields are required");
    }

    try {
      const existingUser = await DoctorDao.findOne({ email });
      if (existingUser) return res.status(400).send("All fields must be completed");

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newDoctor = new Doc({
        photo,
        firstName,
        lastName,
        gender,
        email,
        password: hashedPassword,
        professionalCertificates,
        speciality,
        phone,
        country,
        attentionSchedule,
      });

      await newDoctor.save();
      res.status(201).send("Successfully registered doctor");
    } catch (error) {
      res.status(500).send("Error registering doctor");
    }
  },
};

export default controllerDoc;