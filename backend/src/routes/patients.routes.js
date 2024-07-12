import { Router } from "express";
import bcrypt from "bcrypt";
import Patient from "../models/patientModel.js";
import PatientInfo from "../models/patientInfoModel.js";

const router = Router();

/* Nota: en las arrow funtions es donde iria los controladores pero como no se tienen todavia
por eso solo se contiene mensajes */

router.post("/register", async(req, res)=> {

  console.log("Se inicia el registro de un paciente");
  const { name, mail, pass, phone, address, birthdate, emergencyContact, healthInsurance, 
          bloodType, allergies, currentMedications, medicalHistory } = req.body;


  //Validamos los datos obligatorios
  if (!name || !mail || !pass || !phone) {
    console.error("ERROR: Datos requeridos no recibidos");
    return res.status(400).send("ERROR: Datos requeridos no recibidos");
  }


  try {
    const patientExists = await Patient.findOne({ mail });
    if (patientExists) {
      console.error("ERROR: El paciente ya está registrado");
      return res.status(400).send("ERROR: El paciente ya está registrado");
    }

    //Grabamos en el modelo PatientInfo
    const newPatientInfo = new PatientInfo({
      address,
      birthdate,
      emergencyContact,
      healthInsurance,
      bloodType,
      allergies,
      currentMedications,
      medicalHistory
    });
    let patientInfoSaved = await newPatientInfo.save();
    console.log("Registro exitoso en PatientInfo, el ID es: " + patientInfoSaved._id);


    //Grabamos en el modelo Patient
    const hashedPassword = await bcrypt.hash(pass, 10);

    const newPatient = new Patient({
      name,
      mail,
      pass: hashedPassword,
      phone,
      medicalRecords,
      appointments
    });
    await newPatient.save();

    res.status(201).send("Registro exitoso del paciente");
    console.log("Registro exitoso del paciente");

  } catch (error) {
    res.status(500).send("Error registering doctor");
  }

  res.status(200).json({message: "ERROR: Ocurrió un error en el registro del paciente"});
})



router.post("/login", (res, req)=> {
  const {email, password} = req
  res.status(200).json({message: "login", email, password});
})

router.get("/profile", (res, req)=> {
  res.status(200).json({message: "profile"});
})

router.get("/showAll", (res, req)=> {
  res.status(200).json({message: "view all users"});
})


export default router;