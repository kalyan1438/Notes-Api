import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
      trim: true
    },
    content: {
      type: String,
      required: [true, "Content is required"],
      maxlength: [500, "Content cannot exceed 500 characters"]
    },
    isPinned: {//
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;