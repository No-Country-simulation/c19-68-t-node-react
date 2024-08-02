import MedicalRecords from "./models/medicalRecords.model.js";

export class MedicalRecordsDao {
  async create(appointmentsData) {
    return await MedicalRecords.create(appointmentsData);
  }

  async findById(id) {
    return await MedicalRecords.findById(id);
  }

  async findOne(criteria) {
    return await MedicalRecords.findOne(criteria);
  }

  async find(info) {
    return await MedicalRecords.find(info);
  }

  async update(id, updateData) {
    return await MedicalRecords.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async delete(id) {
    return await MedicalRecords.findByIdAndDelete(id);
  }

  async findAll(info) {
    return await MedicalRecords.find(info);
  }
  async findPopulate(data, otherModels = "", populateExclude = "") {
    return await MedicalRecords.find(data).populate({
      path: otherModels,
      select: populateExclude,
    });
  }
  async createWithSession(appointmentsData, session) {
    return await MedicalRecords.create([appointmentsData], { session });
  }
}
