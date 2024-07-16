import { Router } from "express";
import controllerDoc from '../controllers/doctor.controller.js'

const router = Router();

router.post("/registerDoc", controllerDoc.registerDoc);

router.post("/logInDoc", controllerDoc.logInDoc);

router.post("/logOutDoc", controllerDoc.logOutDoc);

router.post("/editProfileDoc", controllerDoc.editProfileDoc);

router.get("/getDoc/:id", controllerDoc.getDoc)

router.get("/profileDoc", controllerDoc.profileDoc);

router.get("/showAllDoc", controllerDoc.showAllDoc);

export default router;
