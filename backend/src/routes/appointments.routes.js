import { Router } from "express";
import controllerAppo from "../controllers/appointments.controller.js";

const router = Router();

router.post("/registerAppo", controllerAppo.registerAppo);

router.get("/getAllAppo/:state/:id", controllerAppo.getAppoById);


export default router;