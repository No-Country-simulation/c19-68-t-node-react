import { Router } from "express";
import controllerAppo from "../controllers/appointments.controller.js";

const router = Router();

router.post("/registerAppo", controllerAppo.registerAppo);

router.get("/getAllAppo/:id/:state?", controllerAppo.getAppoById);

router.get("/getAppoDoc/:id/:date?", controllerAppo.getAppoDoc);

export default router;