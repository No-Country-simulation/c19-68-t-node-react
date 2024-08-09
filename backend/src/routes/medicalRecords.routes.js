import { Router } from "express";
import controllerMedical from "../controllers/medicalRecords.controller.js";

const router = Router();

router.post("/createMedRec", controllerMedical.register);

router.get("/medRecords/:id", controllerMedical.getMedicalRecords);

export default router;
