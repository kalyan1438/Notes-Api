import express from "express";
import morgan from "morgan";
import connectDB from "./config/db";
const app = express();
connectDB();
app.use(morgan("dev"));
app.get("/Notes",(req,res)=>{
    res.send("Notes Api");
})
app.listen(3000);