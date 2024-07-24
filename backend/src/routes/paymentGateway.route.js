import { Router } from "express";
import controllerPay from "../controllers/paymentGateway.controller.js";

const router = Router();

router.post("/createCheckoutSession", controllerPay.createSession);
router.get("/getCheckoutSession", controllerPay.getCheckoutSession);
router.get("/cancel", controllerPay.cancel);


export default router;