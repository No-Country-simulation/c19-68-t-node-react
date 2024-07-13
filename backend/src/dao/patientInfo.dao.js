import PatientInfo from "./models/patientInfoModel.js";



class PatientInfoDao {

  async create(patientsInfoData, session) {
    const patientInfo = await PatientInfo.create(patientsInfoData, session);
    return patientInfo;
  }

  /*
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
  */
}

export default new PatientInfoDao();