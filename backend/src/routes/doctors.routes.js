import { Router } from "express";
import bcrypt from "bcrypt";
import Doc from "../dao/models/doctorModel.js";

const router = Router();

router.post("/registerDoc", async (req, res) => {
  const saltRounds = 10;
  const {
    name,
    mail,
    pass,
    phone,
    specialty,
    licenseNumber,
    registrationDate,
    calendar,
  } = req.body;

  if (
    !name ||
    !pass ||
    !mail ||
    !phone ||
    !specialty ||
    !licenseNumber ||
    !registrationDate ||
    !calendar
  ) {
    return res.status(400).send("Username and password are required");
  }

  try {
    const existingUser = await Doc.findOne({ name });
    if (existingUser) {
      return res.status(400).send("All fields must be completed");
    }

    const hashedPassword = await bcrypt.hash(pass, saltRounds);

    const newDoctor = new Doc({
      name,
      mail,
      pass: hashedPassword,
      phone,
      specialty,
      licenseNumber,
      registrationDate,
      calendar,
    });

    await newDoctor.save();
    res.status(201).send("Successfully registered doctor");
  } catch (error) {
    res.status(500).send("Error registering doctor");
  }
});

router.post("/loginDoc", (res, req) => {
  const { email, password} = req.body

  res
    .status(200)
    .json({ message: "login the doctor succesfully", email, password });
});

router.post("/logoutDoc", (res, req) => {
  //const {token} = req.body
  res.status(200).json({ message: "logout doctor" });
});

router.get("/profileDoc", (res, req) => {
  res.status(200).json({ message: "doctor's profile" });
});

router.get("/showAllDoc", (res, req) => {
  res.status(200).json({ message: "view all doctors" });
});

export default router;
