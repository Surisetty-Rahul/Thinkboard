import express from "express";
import { getAllNotes,createNote,updateeNote,deleteNote,getNoteById } from "../controllers/notesController.js";

const notesRouter = express.Router();

notesRouter.get("/",getAllNotes);
notesRouter.get("/:id", getNoteById);
notesRouter.post("/", createNote);
notesRouter.put("/:id", updateeNote);
notesRouter.delete("/:id", deleteNote);

export default notesRouter;