import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("dev"));
app.get("/Notes",(req,res)=>{
    res.send("Notes Api");
})
app.listen(3000);