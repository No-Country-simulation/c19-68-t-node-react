import {Router} from "express";
import loginController from "../controllers/login.controller.js";

const router = Router();
router.post("/", loginController.login);
router.get("/confirm/:confirmationString", loginController.confirm);

export default router;