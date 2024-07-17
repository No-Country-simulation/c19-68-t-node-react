import servicePat from '../services/patients.service.js';


const controllerPat = {

  registerPat:  async (req, res) => {

    console.log("Se inicia el registro de un paciente");
    const { photo, firstName, lastName, gender, email, phone, password, country, 
            creditCard, clinicalData } = req.body;
  
  
    //Validamos los datos obligatorios
    if ( !firstName || !lastName || !email || !phone || !password ) {
      console.error("ERROR: Datos requeridos no recibidos");
      return res.status(400).json({ message: "Datos requeridos no recibidos"});
    }

    try {
      
      const patient = await servicePat.registerPat({photo, 
                                                    firstName, 
                                                    lastName, 
                                                    gender, 
                                                    email, 
                                                    phone, 
                                                    password, 
                                                    country, 
                                                    creditCard, 
                                                    clinicalData
                                                  });

      res.status(201).json({ message: "Created succesfully", paciente: patient });
    } catch (error) {
      console.log("ERROR: " + error);
      res.status(500).json({ message: error.message})
    }
  },

  logInPat: async (req, res) => {
    const { email, password } = req.body;
    res
      .status(200)
      .json({ message: "login the patient succesfully", email, password });
  },

  logOutPat: async (req, res) => {
    res.status(200).json({ message: "logout patient" });
  },

  editProfilePat: async (req, res) => {
    res.status(200).json({ message: "Edit patient's profile" });
  },

  getPatId: async (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: "show patients by id", id });
  },

  profilePat: async (req, res) => {
    res.status(200).json({ message: "doctor's profile" });
  },

  getAllPat: async (req, res) => {
    try {
      const patients = await PatientDao.findAll();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default controllerPat;