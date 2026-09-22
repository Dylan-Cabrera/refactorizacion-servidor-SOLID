import mongoose from "mongoose";

export const connectDb = async (): Promise<void> => {
    const PORT = Number(process.env.PORT ?? 3000);
    const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/employees_db';
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB conectado")
    } catch (error) {
        console.log("Error al conectar a MongoDB: ", error )
        process.exit(1);
    }
}