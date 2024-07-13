import PatientService from '../service/patients.service.js';



export const registerPatient = [
    
    async(req, res)=> {

        console.log("Se inicia el registro de un paciente");
        const { name, mail, pass, phone, address, birthdate, emergencyContact, healthInsurance, 
                bloodType, allergies, currentMedications, medicalHistory } = req.body;
      
      
        //Validamos los datos obligatorios
        if (!name || !mail || !pass || !phone) {
          console.error("ERROR: Datos requeridos no recibidos");
          return res.status(400).send("ERROR: Datos requeridos no recibidos");
        }
      
        try {    

          await PatientService.registerPacient({
                name,
                mail,
                pass,
                phone,
                address,
                birthdate,
                emergencyContact,
                healthInsurance,
                bloodType,
                allergies,
                currentMedications,
                medicalHistory
          });  
          res.status(201).send("Registro exitoso del paciente");
      
        } catch (error) {
          console.log("ERROR: " + error);
          res.status(500).send("ERROR: Ocurrió un error en el registro del paciente");
        }
      }

  ];