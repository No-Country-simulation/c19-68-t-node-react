import { PatientDao } from "../dao/patient.dao";

const controllePat = {
  registerPatient: async (req, res) => {
    const { email, password, name, lastName, id } = req.body;

    const patient = await PatientDao.create(
      email,
      password,
      name,
      lastName,
      id
    );
    res.status(200).json({ message: "Created succesfully", paciente: patient});
  },

  getPatients: async (req, res) => {
    try {
      const patients = await PatientDao.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default controllePat;