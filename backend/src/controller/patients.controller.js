import PatientService from '../service/patients.service.js';



export const registerPatient = [
    
    async(req, res)=> {

        console.log("Se inicia el registro de un paciente");
        const { photo, firstName, lastName, gender, email, phone, password, country, 
                creditCard, clinicalData } = req.body;
      
      
        //Validamos los datos obligatorios
        if ( !firstName || !lastName || !email || !phone || !password ) {
          console.error("ERROR: Datos requeridos no recibidos");
          return res.status(400).send("ERROR: Datos requeridos no recibidos");
        }
      
        try {    

          await PatientService.registerPacient({
            photo, 
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
          res.status(201).send("Registro exitoso del paciente");
      
        } catch (error) {
          console.log("ERROR: " + error);
          res.status(500).send("ERROR: Ocurrió un error en el registro del paciente");
        }
      }

  ];