import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
const app = express();
connectDB();
app.use(morgan("dev"));
app.get("/Notes",(req,res)=>{
    res.send("Notes Api");
})
app.get("/deploy",(req,res)=>{
    res.send("<h1> Deployed on Render</h1>");
})
app.listen(3000);