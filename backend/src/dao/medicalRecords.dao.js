import MedicalRecords from "./models/medicalRecords.model.js";

export class MedicalRecordsDao {
  async create(medicalRecordsData) {
    return await MedicalRecords.create(medicalRecordsData);
  }

  async findById(id) {
    return await MedicalRecords.findById(id)
  }
  
  async findOne(criteria) {
    return await MedicalRecords.findOne(criteria)
  }

  async update(id, updateData) {
    return await MedicalRecords.findByIdAndUpdate(id, updateData, {
      new: true,
    })
  }

  async delete(id) {
    return await MedicalRecords.findByIdAndDelete(id)
  }

  async findAll() {
    return await MedicalRecords.find()
  }
}
