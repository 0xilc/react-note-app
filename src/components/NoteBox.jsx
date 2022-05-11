import React from 'react'
import { FaTrash,FaPen,FaBitbucket} from "react-icons/fa";

import { useEffect } from 'react';


const NoteBox=(props) =>{

  return (
    <div className='NoteBox' id={props.id}>
      
        <div className='notebox-wrapper' style={{
          background:props.color
        }}>
          <div className='heading'>
            <h2 className='title'>{props.title}</h2>
          </div>
          <div className='notebox-body'>
            <p className='text'>{props.text}</p>
          </div>
          <div className='action-bts'>
            <button><FaTrash onClick={()=>{props.deleteNote(props.id)}}/></button>
            <button><FaPen onClick={()=>{props.editNote(props.id)}}/></button>
          </div>
        </div>
    </div>
  )
}

export default NoteBox;