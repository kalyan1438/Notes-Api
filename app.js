import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xss from "xss-clean"
dotenv.config();

const app = express();

app.use(cors(),{
    origin:"http://localhost:3000",
    method:["GET","POST"],
    credentials:true
});
app.use(helmet());
app.use(rateLimit({
    windowMs: 15*60*1000,
    max:100,
    message:"to mant request, try again later",
}))
app.use(xss())
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API Running..." });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});