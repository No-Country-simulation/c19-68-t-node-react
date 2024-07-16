import express from "express";
import morgan from "morgan";
import patientsRoutes from "./routes/patients.routes.js";
import doctorsRoutes from "./routes/doctors.routes.js";

//config app express
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", patientsRoutes);
app.use("/api", doctorsRoutes);

//config show requests
app.use(morgan("dev"));

export default app;
