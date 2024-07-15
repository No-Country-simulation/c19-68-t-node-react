import Patient from "./models/patientModel.js";



class PatientDao {

  async create(patientsData) {
    const patient = await Patient.create(patientsData);
    return patient;
  }

  async findByMail(email) {
    return await Patient.findOne({ email: email });
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

export default new PatientDao();