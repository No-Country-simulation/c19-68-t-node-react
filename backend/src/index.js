import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

//config environment variables
dotenv.config({path: './src/config/.env'});

//alternative port
const PORT = process.env.PORT || 6000;

//connect to database from config/db.js
connectDB();

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
