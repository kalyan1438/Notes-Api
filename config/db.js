import mongoose from "mongoose";

const connectionString ="";

export const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("FULL ERROR:", error);
    process.exit(1);
  }
};