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
    video_call_link: { type: String, required: false },
    reasons: { type: String, required: true },
    notes: { type: String, required: false },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Appointments = mongoose.model('Appointments', appointmentsSchema);

export default Appointments;
