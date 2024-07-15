import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
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
    registrationDate: { type: Date, required: true },
    medicalRecords: { type: Array, required: false },
    appointments: { type: Array, required: false },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Patient = mongoose.model("Patients", patientSchema);

export default Patient;
