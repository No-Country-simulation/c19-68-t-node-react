import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import paymentGatewayRoutes from "./routes/paymentGateway.routes.js";
import appointmentsRoutes from "./routes/appointments.routes.js";
import patientsRoutes from "./routes/patients.routes.js";
import doctorsRoutes from "./routes/doctors.routes.js";
import authRoutes from "./routes/auth.routes.js";
import videoCallRoutes from "./routes/videoCallRoutes.js";
import { logResponseStatus } from "./middlewares/loggerRes.middleware.js";
import { initializeServer } from "./config/socketConfig.js";

// Configuración de la aplicación Express
const app = express();

// Middleware para parsear JSON y URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
// Middleware para mostrar las solicitudes
app.use(morgan("dev"));

// Configuración de CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Rutas
app.use("/", logResponseStatus);
app.use("/paymentGateway", paymentGatewayRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/auth", authRoutes);
app.use("/api/videocall", videoCallRoutes);

// Inicializar servidor y socket.io
initializeServer(app);

export default app;
