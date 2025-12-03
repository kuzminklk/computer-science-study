
// Connect MongoDB database


import mongoose from "mongoose";
import errorHandler from "../middleware/errorHandler.js";

async function connectDB() {
    try {
        const connectionInstance = mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        errorHandler(error);
    }
}

export default connectDB;
