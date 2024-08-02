import { Router } from "express";
import controllerPat from "../controllers/patient.controller.js";

const router = Router();

router.post("/registerPat", controllerPat.registerPat);

router.post("/editProfilePat/:id", controllerPat.editProfilePat);

router.get("/getPatId/:id", controllerPat.getPatId);

router.get("/profilePat/:id", controllerPat.profilePat);

router.get("/getAllPat", controllerPat.getAllPat);

export default router;