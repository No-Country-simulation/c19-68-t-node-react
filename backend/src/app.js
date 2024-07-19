import express from "express";
import morgan from "morgan";
import appointmentsRoutes from "./routes/appointments.route.js";
import patientsRoutes from "./routes/patients.route.js";
import doctorsRoutes from "./routes/doctors.routes.js";

//config app express
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/api", doctorsRoutes);

//config show requests
app.use(morgan("dev"));

export default app;