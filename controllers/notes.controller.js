import * as Note from "../models/notes.model.js";

// CREATE
export const create = (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      success: false,
      message: "Title and content are required"
    });
  }

  const note = Note.createNote(title, content);

  return res.status(201).json({
    success: true,
    data: note
  });
};

// GET ALL
export const getAll = (req, res) => {
  const notes = Note.readAll();

  return res.status(200).json({
    success: true,
    data: notes
  });
};

// GET ONE
export const getOne = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID"
    });
  }

  const note = Note.readOne(id);

  if (!note) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    });
  }

  return res.status(200).json({
    success: true,
    data: note
  });
};

// UPDATE
export const update = (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID"
    });
  }

  if (title === undefined && content === undefined) {
    return res.status(400).json({
      success: false,
      message: "Nothing to update"
    });
  }

  const updatedNote = Note.updateTitleOrContent(id, title, content);

  if (!updatedNote) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    });
  }

  return res.status(200).json({
    success: true,
    data: updatedNote
  });
};

// DELETE
export const remove = (req, res) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      message: "Invalid ID"
    });
  }

  const deleted = Note.deleteNote(id);

  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: "Note not found"
    });
  }

  return res.status(204).send();
};
