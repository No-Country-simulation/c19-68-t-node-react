import express from "express";
import morgan from "morgan";
/*import appointmentsRoutes from "./routes/appointments.route.js";*/
import patientsRoutes from "./routes/patient.routes.js";
import doctorsRoutes from "./routes/doctor.routes.js";
import loggedRoutes from "./routes/logged.routes.js";

//config app express
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
/*app.use("/appointments", appointmentsRoutes);*/
app.use("/patients", patientsRoutes);
app.use("/doctors", doctorsRoutes);
app.use("/user", loggedRoutes)

//config show requests
app.use(morgan("dev"));

export default app;