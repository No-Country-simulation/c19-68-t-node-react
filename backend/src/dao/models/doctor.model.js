import mongoose from "mongoose";
import generateID from "../../helpers/generateId.js";

const dailyAvailabilitySchema = new mongoose.Schema({
  morningSlot: {
    start: { type: String, required: true }, // Hora de inicio (formato HH:mm)
    end: { type: String, required: true }, // Hora de fin antes del almuerzo (formato HH:mm)
  },
  afternoonSlot: {
    start: { type: String, required: true }, // Hora de inicio después del almuerzo (formato HH:mm)
    end: { type: String, required: true }, // Hora de fin (formato HH:mm)
  },
});

const doctorSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      // Optional field
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: {
      type: String,
      enum: ["female", "male", "other"],
      // Optional field
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The email format is not valid"],
    },
    password: {
      type: String,
      required: true,
    },
    professionalCertificates: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    speciality: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
    },
    availability: {
      daysOfWeek: [
        {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          required: true,
        },
      ],
      timeSlots: dailyAvailabilitySchema,
    },
    confirmationString: {
      type: String,
      default: generateID(),
    },
    confirmed: {
      type: Boolean,
      default: true,
    },
    availabilityStatus: {
      type: String,
      enum: ["available", "not_available"],
      default: "available",
    },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Doctor = mongoose.model("Doctors", doctorSchema);

export default Doctor;
