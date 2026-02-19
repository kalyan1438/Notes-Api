import mongoose from "mongoose";

const connectionString =
  "mongodb+srv://21Backend:Kalyan%401438@21backend.hvextm3.mongodb.net/?appName=21Backend";

export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Connection error:", error.message);
    process.exit(1);
  }
};
