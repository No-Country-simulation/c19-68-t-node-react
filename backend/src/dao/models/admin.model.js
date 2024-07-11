import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    pass: { type: String, required: true },
  },
  {
    versionKey: false,
    strict: "throw",
  }
);

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
