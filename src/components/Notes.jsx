import React from 'react';
import NoteBox from './NoteBox';
import EmptyBox from './EmptyBox';
import { Link , useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';




const Notes = () => {
  let navigate = useNavigate();
  
  const [notes, setNotes] = useState([]);


  const deleteNote = (noteId) => {
    console.log(noteId)
    let editedData = notes.filter((note)=>{
      if(note.id==noteId){
        return 0;
      }
      else{
        return 1;
      }
    })
    setNotes(editedData)
    editedData = JSON.stringify(editedData)
    localStorage.setItem("notes",editedData)

  }

  const editNote = (noteId) => {
    navigate("/editnote/"+noteId);
  }


  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("notes"));
    if(data == null){
      localStorage.setItem("notes","[]");
    }
    setNotes(data)

  },[])


  return (
    <div className='Notes'>
        <div className='notes-wrapper'>
            <div className='safearea'>
                <div className='flex' id="yas">
                    <div className='col-3'><Link to="createnote"><EmptyBox title={"akin"} /></Link></div>
                    {
                      notes?.length > 0 
                      ? (
                        notes.map((note)=>{
                          return <div className='col-3'><NoteBox {...note} deleteNote={deleteNote} editNote={editNote}/></div>
                        })  
  
                      ) : (
                        <NoteBox title="There is no note!" text="But you can easily create by clicking + button!"/>
                      )
                      
                    }
                    
                </div>
            </div>
        </div>
    </div>
  )
}


export default Notes