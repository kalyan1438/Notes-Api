import express from "express";
import morgan from "morgan";

import dotenv from "dotenv";

const app = express();

app.use(morgan("dev"));
app.get("/Notes",(req,res)=>{
    res.send("Notes Api");
})//
app.get("/deploy",(req,res)=>{
    res.send("<h1> Deployed on Render</h1>");
});//
app.get("/:name",(req,res)=>{
    const name = req.params.name;
    res.send(`<h1>Erri Pukka ${name}</h1>`);
})
app.listen(3000);//