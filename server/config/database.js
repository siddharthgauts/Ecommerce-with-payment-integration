import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb is connected with ${connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // If you want to exit the process after an unhandled rejection,
    // uncomment the following line:
    // process.exit(1);
  }
};
