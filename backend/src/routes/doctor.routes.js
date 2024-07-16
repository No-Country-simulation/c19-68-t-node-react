import { Router } from "express";
import controllerDoc from "../controllers/doctor.controller.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = Router();

router.post("/registerDoc", controllerDoc.registerDoc);

router.post("/logOutDoc", controllerDoc.logOutDoc);

router.post("/editProfileDoc", controllerDoc.editProfileDoc);

router.get("/getDoc/:id", controllerDoc.getDoc);

router.get("/profileDoc", controllerDoc.profileDoc);

router.get("/getAllDoc", controllerDoc.getAllDoc);

router.get("/confirm/:token", controllerDoc.confirm);

router.post("/login", controllerDoc.login);

//Private Endpoints
router.get("/profile", checkAuth, controllerDoc.profileDoc);

export default router;
