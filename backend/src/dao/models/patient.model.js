/*
import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mail: { 
      type: String, 
      required: true,
      // Validating email format with regular expression and custom message
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'The email format is not valid'
      ]
    },
    pass: { type: String, required: true },
    phone: { type: String, required: false },
    registrationDate: { type: Date, required: true },
    medicalRecords: { type: Array, required: false },
    appointments: {type: Array, required: false}
  });
  
const Patient = mongoose.model('Patients', patientSchema);

export default Patient;
*/

import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
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
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The email format is not valid"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      // Optional field
    },
    creditCard: {
      number: {
        type: String,
        minlength: 13,
        maxlength: 19,
        trim: true,
        // Optional field
      },
    },
    clinicalData: {
      dateOfBirth: {
        type: Date,
        // Optional field
      },
      age: {
        type: String,
        // Optional field
      },
      height: {
        type: String,
        // Optional field
      },
      weight: {
        type: String,
        // Optional field
      },
      allergies: {
        type: Boolean,
        // Optional field
      },
      medications: {
        type: Boolean,
        // Optional field
      },
      medicationName: {
        type: String,
        // Optional field
      },
      disability: {
        type: String,
        enum: ["Cognitive", "Visual", "Auditory"],
        // Optional field
      },
      smoking: {
        type: String,
        enum: ["Yes", "No", "Occasionally"],
        // Optional field
      },
      alcoholConsumption: {
        type: String,
        enum: ["Yes", "No", "Occasionally"],
        // Optional field
      },
      psychoactiveSubstances: {
        type: String,
        enum: ["Yes", "No", "Occasionally"],
        // Optional field
      },
    },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Patient = mongoose.model('Patients', patientSchema);

export default Patient;