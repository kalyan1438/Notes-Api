const notes = [{
    id:1,
    title:"Frist Note",
    content:"Sample Content",
    createdAt: new Date().toISOString(),
}]

export const createNote = (title,content)=>{
    if(!title || !content){
        return null;
    }
     const newId =
    notes.length > 0
      ? notes[notes.length - 1].id + 1
      : 1;
    const note = {id:newId,
        title,
        content,
        createdAt:new Date().toISOString()
    }
    notes.push(note);
    return note;
}
export const readOne = (id)=>{
    return notes.find(idx => idx.id === id) || null;
}
export const readAll = ()=>notes;
export const updateTitleOrContent = (id,title,content)=>{
    const note = notes.find(idx => idx.id === id);
    if(!note) return null;
    if(title!== undefined) note.title = title;
    if(content!== undefined) note.content = content;
    return note;
}
export const deleteNote = (id)=>{
    const idx = notes.findIndex(idx => id==idx.id)
    if(idx === -1) return  false;
    notes.splice(idx,1);
    return true;
}














//hellohello