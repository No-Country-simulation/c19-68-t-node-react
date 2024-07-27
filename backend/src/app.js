import express from "express";
import morgan from "morgan";
import appointmentsRoutes from "./routes/appointments.routes.js";
import patientsRoutes from "./routes/patients.routes.js";
import doctorsRoutes from "./routes/doctors.routes.js";

//config app express
const app = express();

//config show requests
app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/appointments", appointmentsRoutes);
app.use("/patients", patientsRoutes);
app.use("/api", doctorsRoutes);



export default app;