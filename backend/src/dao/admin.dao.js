import Admin from "./models/admin.model.js";

export class AdminDao {
  async create(adminData) {
    const admin = await Admin.create(adminData);
    return admin.toObject()
  }
    
  async findById(id) {
    return await Admin.findById(id).lean();
  }
    
  async update(id, updateData) {
    return await Admin.findByIdAndUpdate(id, updateData, { new: true }).lean();
  }
    
  async delete(id) {
    return await Admin.findByIdAndDelete(id).lean();
  }
    
  async findAll() {
    return await Admin.find().lean();
  }
}