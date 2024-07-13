import mongoose from 'mongoose';

const medicalRecordsSchema = new mongoose.Schema({
    patient_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Patients', required: true },
    doctor_id:{ type: mongoose.Schema.Types.ObjectId, ref: 'Doctors', required: true },
    date: { type: Date, required: true },
    details: { type: String, required: true },
    diagnosis: { type: String, required: true },
    treatment: { type: String, required: true }
  });
  
const MedicalRecords = mongoose.model('MedicalRecords', medicalRecordsSchema);

export default MedicalRecords;

