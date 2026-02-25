import mongoose from "mongoose";
const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minlength:6,
    }
},
{timestamps:true}
);
const User = mongoose.model("User", userModel);
export default User