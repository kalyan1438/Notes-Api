import express from "express"
import * as ctlr from "../controllers/notes.controller.js"

const router = express.Router();
router.post("/",ctlr.createNote);
router.get("/",ctlr.readAll);
export default router;