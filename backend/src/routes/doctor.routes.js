import { Router } from "express";
import controllerLogin from "../controllers/login.controller.js";
import { checkAuth } from "../middlewares/checkAuth.js";
import controllerDoc from "../controllers/doctor.controller.js";

const router = Router();

router.post("/registerDoc", controllerDoc.registerDoc);

router.post("/logOutDoc", controllerLogin.logOut);

router.post("/editProfileDoc", controllerDoc.editProfileDoc);

router.get("/getDoc/:id", controllerDoc.getDoc);

router.get("/profileDoc", controllerDoc.profileDoc);

router.get("/getAllDoc", controllerDoc.getAllDoc);

router.get("/confirm/:token", controllerLogin.confirm);

router.post("/login", controllerLogin.login);

//Private Endpoints
router.get("/profile", checkAuth, controllerDoc.profileDoc);

export default router;