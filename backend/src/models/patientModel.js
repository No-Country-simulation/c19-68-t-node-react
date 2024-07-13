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
    registrationDate: { type: Date, default: Date.now },
    medicalRecords: { type: Array, required: false },
    appointments: {type: Array, required: false},
    patientInfoID:{ type: mongoose.Schema.Types.ObjectId, ref: 'PatientInfo', required: true }
  });
  
const Patient = mongoose.model('Patients', patientSchema);

export default Patient;
