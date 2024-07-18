import express from "express";
import morgan from "morgan";
import patientsRoutes from "./routes/patient.routes.js";
import doctorsRoutes from "./routes/doctor.routes.js";

//config app express
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/patients", patientsRoutes);
app.use("/api", doctorsRoutes);

//config show requests
app.use(morgan("dev"));

export default app;
