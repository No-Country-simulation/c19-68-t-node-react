// cd a la carpeta backend y npm i para instalar las dependencias,
// no tenemos todavia la base de datos por ende el .env de la url esta vacia
// el archivo .env esta dentro de la carpeta config "/config/.env"
// actualmente el .env solo contiene el PORT=8080

import express from 'express';
import { PORT } from './config/config.js';
import { connectDB } from './db.js';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//connect to database from db.js
connectDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;