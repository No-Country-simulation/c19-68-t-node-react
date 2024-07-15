import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(`${MONGODB_URL}`);
    console.log("DB is connected succesfully");
  } catch (error) {
    console.log(error);
  }
};
