import {Router} from "express";
import authController from "../controllers/auth.controller.js";

const router = Router();
router.post("/", authController.login);
router.post("/logout", authController.logout);
router.get("/confirm/:confirmationString", authController.confirm);

export default router;