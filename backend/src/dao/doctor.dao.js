import Doctor from "./models/doctor.model.js";

export class DoctorDao {
  async create(doctorData) {
    const doctor = await Doctor.create(doctorData);
    return doctor.toObject();
  }

  async findById(id) {
    return await Doctor.findById(id).lean();
  }

  async update(id, updateData) {
    return await Doctor.findByIdAndUpdate(id, updateData, {
      new: true,
    }).lean();
  }

  async delete(id) {
    return await Doctor.findByIdAndDelete(id).lean();
  }

  async findAll() {
    return await Doctor.find().lean();
  }
}
