import mongoose from 'mongoose';

const appointmentsSchema = new mongoose.Schema(
  {
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
      required: true,
    },
    doctor_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctors",
      required: true,
    },
    date: { type: Date, required: true },
    startTime: {
      type: String,
      trim: true,
      required: true,
    },
    endTime: {
      type: String,
      trim: true,
      required: true,
    },
    state: {
      type: String,
      required: false,
      enum: ["pending", "confirmed", "completed", "canceled"],
    },
    video_call_link: { type: String, required: true },
    reasons: { type: String, default: "No se comento la razón" },
    notes: { type: String, default: "No hay notas del paciente" },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Appointments = mongoose.model('Appointments', appointmentsSchema);

export default Appointments;
