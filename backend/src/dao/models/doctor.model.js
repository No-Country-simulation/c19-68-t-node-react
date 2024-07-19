import mongoose from "mongoose";
import generateID from "../../helpers/generateId.js";

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
    attentionSchedule: [
      {
        day: {
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
          trim: true,
        },
        startTime: {
          type: String,
          trim: true,
        },
        endTime: {
          type: String,
          trim: true,
        },
      },
    ],
    token: {
      type: String,
      default: generateID(),
    },
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Doctor = mongoose.model("Doctors", doctorSchema);

export default Doctor;
