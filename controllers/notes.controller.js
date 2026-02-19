import Note from "../models/notes.model.js";
export const createNote = async (req,res)=>{
    try{
      const note = await Note.create(req.body);
      res.status(201).json({
        sucess:true,
        data:note
      })
    }
    catch(e){
      res.status(400).json({
        sucess:false,
        error:e.message,
      })
    }
}
export const readAll = async ()=>{
  const notes = await Note.find();
  res.json({
    sucess:true,
    note:notes,
  })

}