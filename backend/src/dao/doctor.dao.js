import Doctor from "./models/doctor.model.js";

export class DoctorDao {
  async create(doctorData) {
    return await Doctor.create(doctorData);
  }

  async findById(id) {
    return await Doctor.findById(id)
  }

  async update(id, updateData) {
    return await Doctor.findByIdAndUpdate(id, updateData, {
      new: true,
    })
  }

  async delete(id) {
    return await Doctor.findByIdAndDelete(id)
  }

  async findAll() {
    return await Doctor.find()
  }

  async findOne(info){
    return await Doctor.findOne(info)
  }

  async updateWithSession(id, updateData, session) {
    return await Doctor.findByIdAndUpdate(id, updateData, {
        new: true,
        session
    });
  }
}
