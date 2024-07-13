import mongoose from 'mongoose';

const patientInfoSchema = new mongoose.Schema({
    address: { type: String },
    birthdate: { type: Date },
    emergencyContact: { type: String },
    healthInsurance: { type: String },
    bloodType: { type: String },
    allergies: { type: Array, required: false },
    currentMedications: { type: Array, required: false },
    medicalHistory: { type: Array, required: false }
  });
  
const PatientInfo = mongoose.model('PatientInfo', patientInfoSchema);

export default PatientInfo;