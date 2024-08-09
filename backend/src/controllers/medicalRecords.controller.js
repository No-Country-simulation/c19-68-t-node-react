import medicalService from "../services/medicalRecords.service.js";

const medicalRecorsController = {
  async register(req, res) {
    const bodyData = req.body;
    try {
      const createMedRec = await medicalService.regisMedRec(bodyData);
      res
        .status(200)
        .json({ message: "Medical record successfully created", createMedRec });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },
  async getMedicalRecords(req, res) {
    const { id } = req.params;
    try {
      const doctor = await medicalService.getHistoryById(id);
      res
        .status(200)
        .json({ message: "Doctor retrieved successfully", doctor });
    } catch (error) {
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  },
};

export default medicalRecorsController;
