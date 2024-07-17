import { DoctorDao } from "../dao/doctor.dao.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import generateJWT from "../helpers/generateJwt.js";
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
      if (existingUser)
        return res.status(400).send("All fields must be completed");

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
