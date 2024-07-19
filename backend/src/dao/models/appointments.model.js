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
    date_hour: { type: Date, required: true },
    state: {
      type: String,
      required: false,
      enum: ["pending", "confirmed", "completed", "canceled"],
    },
    video_call_link: { type: String, required: true },
    reasons: { type: String, required: true },
    notes: { type: String, required: true },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Appointments = mongoose.model('Appointments', appointmentsSchema);

export default Appointments;
