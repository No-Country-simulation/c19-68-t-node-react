import express from "express";
import cors from "cors";
import morgan from "morgan";
import paymentGatewayRoutes from "./routes/paymentGateway.routes.js";
import appointmentsRoutes from "./routes/appointments.routes.js";
import patientsRoutes from "./routes/patients.routes.js";
import doctorsRoutes from "./routes/doctors.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { logResponseStatus } from "./middlewares/loggerRes.middleware.js";
//config app express
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config show requests
app.use(morgan("dev"));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

//Routes
app.use('/', logResponseStatus)
app.use("/paymentGateway", paymentGatewayRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/auth", authRoutes);

export default app;