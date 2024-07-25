import express from "express";
import morgan from "morgan";
import paymentGatewayRoutes from "./routes/paymentGateway.route.js";
import appointmentsRoutes from "./routes/appointments.route.js";
import patientsRoutes from "./routes/patients.route.js";
import doctorsRoutes from "./routes/doctors.routes.js";
import authRoutes from "./routes/authRoutes.js";
//config app express
const app = express();

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
app.use("/paymentGateway", paymentGatewayRoutes);
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/auth", authRoutes);

export default app;
