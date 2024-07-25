import { Router } from "express";
import controllerAppo from "../controllers/appointments.controller.js";

const router = Router();

router.post("/registerAppo", controllerAppo.registerAppo);



export default router;