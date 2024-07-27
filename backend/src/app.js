import express from "express";
import morgan from "morgan";
import paymentGatewayRoutes from "./routes/paymentGateway.routes.js";
import appointmentsRoutes from "./routes/appointments.routes.js";
import patientsRoutes from "./routes/patients.routes.js";
import doctorsRoutes from "./routes/doctors.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { logResponseStatus } from "./middlewares/loggerRes.middleware.js";
import { handleCors } from "./config/cors.js";

//config app express
const app = express();
handleCors(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config show requests
app.use(morgan("dev"));


//Routes
app.use('/', logResponseStatus)
app.use("/paymentGateway", paymentGatewayRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/auth", authRoutes);

export default app;
