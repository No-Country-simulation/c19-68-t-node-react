import Admin from "./models/admin.model.js";

export class AdminDao {
  async create(adminData) {
    return await Admin.create(adminData);
  }

  async findAll() {
    return await Admin.find()
  }
    
  async findById(id) {
    return await Admin.findById(id)
  }

  async findOne(criteria) {
    return await Admin.findById(criteria)
  }
    
  async update(id, updateData) {
    return await Admin.findByIdAndUpdate(id, updateData, { new: true })
  }
    
  async delete(id) {
    return await Admin.findByIdAndDelete(id)
  }
    
  
}