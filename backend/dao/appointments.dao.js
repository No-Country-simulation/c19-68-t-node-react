import Appointments from "./models/appointments.model.js";

export class AppointmentsDao {
  async create(appointmentsData) {
    return await Appointments.create(appointmentsData);
  }

  async findById(id) {
    return await Appointments.findById(id);
  }

  async findOne(criteria) {
    return await Appointments.findOne(criteria);
  }

  async find(info) {
    return await Appointments.find(info);
  }

  async update(id, updateData) {
    return await Appointments.findByIdAndUpdate(id, updateData, {
      new: true,
    });
  }

  async delete(id) {
    return await Appointments.findByIdAndDelete(id);
  }

  async findAll(info) {
    return await Appointments.find(info);
  }

  async createWithSession(appointmentsData, session) {
    return await Appointments.create([appointmentsData], { session });
  }

  async findPopulate(data, otherModels = "", populateExclude = "") {
    return await Appointments.find(data).populate({
      path: otherModels,
      select: populateExclude,
    });
  }
}
