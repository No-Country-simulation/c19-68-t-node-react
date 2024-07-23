const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  timeSlots: {
    monday: [{ type: String, required: true }],
    tuesday: [{ type: String, required: true }],
    wednesday: [{ type: String, required: true }],
    thursday: [{ type: String, required: true }],
    friday: [{ type: String, required: true }],
    saturday: [{ type: String, required: true }],
    sunday: [{ type: String, required: true }]
  }
});

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availability: [availabilitySchema]
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
