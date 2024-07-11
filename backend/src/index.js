// cd a la carpeta backend y npm i para instalar las dependencias,
// no tenemos todavia la base de datos por ende el .env de la url esta vacia
// el archivo .env esta dentro de la carpeta config "/config/.env"
// actualmente el .env solo contiene el PORT=8080

import express from 'express';
import morgan from "morgan";
import { PORT } from './config/config.js';
import { connectDB } from './db.js';
import patientsRoutes from './routes/patients.routes.js'
import doctorsRoutes from "./routes/doctors.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/api", patientsRoutes);
app.use("/api", doctorsRoutes);

//connect to database from db.js
connectDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;