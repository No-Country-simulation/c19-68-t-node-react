import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

await mongoose.connect(`${process.env.MONGODB_URL}`);
console.log(`Base de datos conectada`);

export const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});