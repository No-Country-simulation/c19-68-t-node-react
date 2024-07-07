// cd a la carpeta backend y npm i para instalar las dependencias,
// no tenemos todavia la base de datos por ende el .env de la url esta vacia
// el archivo .env esta dentro de la carpeta config "/config/.env"
// actualmente el .env solo contiene el PORT=8080

import express from 'express';
import mongoose from 'mongoose';
import { MONGODB_URL, PORT } from './config/config.js';
import {createRoom, joinRoom} from './controllers/citaController.js'

await mongoose.connect(`${MONGODB_URL}`);
console.log(`Base de datos conectada`);

export const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/', createRoom)
app.use('/', joinRoom)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});