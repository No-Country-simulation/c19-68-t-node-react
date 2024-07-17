import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "The email format is not valid"],
    },
    pass: { type: String, required: true },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;