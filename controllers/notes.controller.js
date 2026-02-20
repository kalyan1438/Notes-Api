import Note from "../models/note.model.js";

export const createNote = async (req, res, next) => {
  try {
    const note = await Note.create(req.body);

    res.status(201).json({
      success: true,
      data: note
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL
export const getAllNotes = async (req, res, next) => {
  try {
    const notes = await Note.find();

    res.status(200).json({
      success: true,
      data: notes
    });
  } catch (error) {
    next(error);
  }
};

