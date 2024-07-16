import { Router } from "express";
import controllerDoc from "../controllers/doctor.controller.js";

const router = Router();

router.post("/doctors", controllerDoc.registerDoc);

export default router;
