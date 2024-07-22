import { Router } from "express";
import loginController from "../controllers/login.controller.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const router = Router();

router.post("/logged", loginController.login);
router.post("/logOut", loginController.logOut);


export default router;