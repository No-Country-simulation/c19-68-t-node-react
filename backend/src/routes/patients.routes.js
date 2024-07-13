import { registerPatient } from '../controller/patients.controller.js';
import { Router } from "express";
const router = Router();




router.post('/register', registerPatient);


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