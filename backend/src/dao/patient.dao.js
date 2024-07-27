import Patient from "./models/patient.model.js";

export class PatientDao {
  async create(patientsData) {
    return await Patient.create(patientsData);
  }

  async findById(id, fieldsToExclude = "") {
    return await Patient.findById(id).select(fieldsToExclude);
  }

  async update(id, updateData) {
    return await Patient.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async delete(id) {
    return await Patient.findByIdAndDelete(id);
  }

  async findAll() {
    return await Patient.find();
  }

  async findOne(info) {
    return await Patient.findOne(info);
  }
}
