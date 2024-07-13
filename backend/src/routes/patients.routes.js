import mongoose from 'mongoose';
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


  // Iniciamos una sesión de MongoDB
  const session = await mongoose.startSession();

  try {
    const patientExists = await Patient.findOne({ mail });
    if (patientExists) {
      console.error("ERROR: El paciente ya está registrado");
      return res.status(400).send("ERROR: El paciente ya está registrado");
    }

    session.startTransaction();

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
    let patientInfoSaved = await newPatientInfo.save({ session });
    console.log("Registro exitoso en PatientInfo, el ID es: " + patientInfoSaved._id);


    //Grabamos en el modelo Patient
    const hashedPassword = await bcrypt.hash(pass, 10);

    const newPatient = new Patient({
      name,
      mail,
      pass: hashedPassword,
      phone,
      patientInfoID: patientInfoSaved._id
    });
    await newPatient.save({ session });

    // Commit de la transacción si todo está bien
    await session.commitTransaction();
    session.endSession();

    console.log("Registro exitoso del paciente");

    res.status(201).send("Registro exitoso del paciente");

  } catch (error) {
    console.log("ERROR: " + error);
    res.status(500).send("ERROR: Ocurrió un error en el registro del paciente");

    // Rollback de la transacción si ocurre algún error
    await session.abortTransaction();
    session.endSession();
    console.log("Se realizo ROLLBACK exitosamente");
  }
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