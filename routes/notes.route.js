import express from "express"
import * as ctlr from "../controllers/notes.controller.js"

const router = express.Router();
router.post("/",ctlr.create);
router.get("/",ctlr.getAll);
router.get("/:id",ctlr.getOne);
router.put("/:id",ctlr.update);
router.delete("/:id",ctlr.remove);
export default router;