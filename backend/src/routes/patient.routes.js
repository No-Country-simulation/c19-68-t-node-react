import { Router } from "express";
import controllerPat from "../controllers/patient.controller.js";
import controllerLogin from "../controllers/login.controller.js";

const router = Router();

router.post("/registerPat", controllerPat.registerPat);

router.post("/logInPat", controllerLogin.login);

router.post("/logOutPat", controllerLogin.logOut);

router.post("/editProfilePat", controllerPat.editProfilePat);

router.get("/getPatId/:id", controllerPat.getPatId);

router.get("/profilePat", controllerPat.profilePat);

router.get("/getAllPat", controllerPat.getAllPat);

export default router;