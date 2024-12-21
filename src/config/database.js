import mongoose from "mongoose";
import dotenv from "dotenv-flow";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

mongoose.set('strictQuery', false);
if (!MONGO_URL) {
    console.error(
        "Error: MONGO_URL no está definida en las variables de entorno."
    );
    process.exit(1);
}

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("MongoDB connected susccessfully");
        console.log(`Entorno actual: ${process.env.NODE_ENV}`)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;