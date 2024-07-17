import mongoose from "mongoose";
import bcrypt from "bcrypt";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    mail: {
      type: String,
      required: true,
      // Validating email format with regular expression and custom message
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The email format is not valid"],
    },
    pass: { type: String, required: true },
    phone: { type: String, required: false },
    specialty: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    registrationDate: { type: Date, required: true },
    calendar: { type: Array, required: true },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Doctor = mongoose.model("Doctors", doctorSchema);

export default Doctor;