import mongoose from "mongoose";
import { MONGODB_URL } from "./config/config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGODB_URL}`);
    console.log("DB is conncested succesfully");
  } catch (error) {
    console.log(error);
  }
};
