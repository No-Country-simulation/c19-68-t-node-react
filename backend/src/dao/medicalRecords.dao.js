import MedicalRecords from "./models/medicalRecords.model.js";

export class MedicalRecordsDao {
  async create(medicalRecordsData) {
    const medical = await MedicalRecords.create(medicalRecordsData);
    return medical.toObject();
  }

  async findById(id) {
    return await MedicalRecords.findById(id).lean();
  }

  async update(id, updateData) {
    return await MedicalRecords.findByIdAndUpdate(id, updateData, {
      new: true,
    }).lean();
  }

  async delete(id) {
    return await MedicalRecords.findByIdAndDelete(id).lean();
  }

  async findAll() {
    return await MedicalRecords.find().lean();
  }
}
