import React from 'react'
import { FaTrash,FaSave,FaBitbucket} from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const CreateNote = () => {
    const [noteColor, setNoteColor] = useState("#91d1b6")
    const [order,setOrder] = useState(0)
    const colors = ["#91d1b6","#88bae0","#f7f48b","#fbdede","#f8b2bc","#f59598","#fcbe7c","#cdb3d5"];
    const changeColor = () => {
        if((order+1)>=7){
            setOrder(0)
            console.log("0")
        }   
        else{
            setOrder(order+1)
            
        }
        setNoteColor(colors[order])
    };
    
    const saveNote = () =>{
        let tempTitle=document.getElementById("create-note-title").value;
        let tempText=document.getElementById("create-note-text").value;
        if(tempTitle==""){
            alert("Please give a title to save your note.")
        }
        else{        
            let tempId = Math.floor(Math.random()*1000);
            let temp = {"title":tempTitle,"text":tempText,"id":tempId,"color":noteColor}
            let past = JSON.parse(localStorage.getItem("notes"));
            past.push(temp)
            past = JSON.stringify(past)
            localStorage.setItem("notes",past)
            navigate("/")
        }
    }
    const discard = () => {

        document.getElementById("create-note-title").value = "";
        document.getElementById("create-note-text").value = ""

    }

    let navigate = useNavigate();
    return (
        <div className='CreateNote'>
            <div className='editnote-wrapper'>
                <div className='safearea'>
                    <div className='color-sign' onClick={changeColor} style={{background:noteColor}}></div>
                    <div className='note-editing'>
                        <div className='title'>
                            <input type="text" placeholder='Create your note' id="create-note-title"></input>
                        </div>
                        <div className='text'>
                            <textarea type="text" placeholder='Write something here!' id="create-note-text"></textarea>
                        </div>
                    </div>
                </div>
                <div className='toolbar-rear' style={{color:noteColor}}>
                    <button className='def-btn'><FaSave onClick={saveNote}></FaSave></button>
                    <button className='def-btn'><FaTrash onClick={discard}></FaTrash></button>
                    <button className='def-btn'><FaBitbucket onClick={changeColor}></FaBitbucket></button>
                </div>
            </div>
        </div>
  )
}

export default CreateNote
