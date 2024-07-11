import Appointments from "./models/appointments.model.js";

export class AppointmentsDao {
  async create(appointmentsData) {
    const appointments = await Appointments.create(appointmentsData);
    return appointments.toObject();
  }

  async findById(id) {
    return await Appointments.findById(id).lean();
  }

  async update(id, updateData) {
    return await Appointments.findByIdAndUpdate(id, updateData, {
      new: true,
    }).lean();
  }

  async delete(id) {
    return await Appointments.findByIdAndDelete(id).lean();
  }

  async findAll() {
    return await Appointments.find().lean();
  }
}
