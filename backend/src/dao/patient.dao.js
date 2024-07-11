import Patient from "./models/patient.model.js";

export class PatientDao {
  async create(patientsData) {
    const patient = await Patient.create(patientsData);
    return patient.toObject();
  }

  async findById(id) {
    return await Patient.findById(id).lean();
  }

  async update(id, updateData) {
    return await Patient.findByIdAndUpdate(id, updateData, {
      new: true,
    }).lean();
  }

  async delete(id) {
    return await Patient.findByIdAndDelete(id).lean();
  }

  async findAll() {
    return await Patient.find().lean();
  }
}
