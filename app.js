import express, { json } from "express";
import router from "./routes/notes.route.js";
import { connectDB } from "./config/db.js";
connectDB(); //
const app = express();
app.use(express.json());
app.use("/notes",router);
app.get("/",(req,res)=>{
    res.send("Notes Api");
});
app.listen(3000);
