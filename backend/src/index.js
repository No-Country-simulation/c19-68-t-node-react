import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

//config environment variables
dotenv.config();

//alternative port
const PORT = process.env.PORT || 6000;

//connect to database from config/db.js
connectDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

/*import express from 'express';
import morgan from "morgan";
import { PORT } from './config/config.js';
import { connectDB } from './config/db.js';
import patientsRoutes from './routes/patients.routes.js'
import doctorsRoutes from "./routes/doctors.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/patients", patientsRoutes);
app.use("/api", doctorsRoutes);

//connect to database from db.js
connectDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;*/