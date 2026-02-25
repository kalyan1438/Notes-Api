import mongoose from "mongoose";
const connectDB = async () => {
    try{
      await mongoose.connect(process.env.MONGODB);
      console.log("MongoDB Connected");
    }
    catch(e){
      console.log("Failed to Connect",e.message);
      process.exit(1);
    }
}
export default connectDB;