import express from "express";
const app = express();
app.get("/notes/:user/:id",(req,res)=>{
    res.json({
        userId:req.params.id,
        title:"Task 1",
        content:"21 to complete the Backend ",
        Timestamp:true,
    })
})
app.listen(3000);