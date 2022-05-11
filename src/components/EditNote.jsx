import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { FaTrash,FaSave,FaBitbucket} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const EditNote = ( params ) => {
    let { id } = useParams();
    

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

    const navigate = useNavigate();
    
    const saveNote = () => {

        let tempTitle= document.getElementById("editnote-title").value;
        let tempText= document.getElementById("editnote-text").value;
        let template = {title:tempTitle,text:tempText,id:id,color:noteColor}
        
        let data = JSON.parse(localStorage.getItem("notes"))
        let temp = data.filter((element)=>{
            if(element.id == id){
                return 0
            }
            else{
                return 1
            }
        })
        temp.unshift(template);
        temp = JSON.stringify(temp)
        localStorage.setItem("notes",temp)
        navigate("/");
    }

    const deleteNote = () => {
        let data = JSON.parse(localStorage.getItem("notes"))
        
        let temp = data.filter((element)=>{
            if(element.id == id){
                return 0
            }
            else{
                return 1
            }
        })
        temp = JSON.stringify(temp)
        localStorage.setItem("notes",temp)
        navigate("/");

    }

    useEffect(()=>{
        let data = localStorage.getItem("notes");
        let temp={}
        data = JSON.parse(data);
        data.forEach(element => {
            if(element.id==id){
                setNoteColor(element.color)
                temp = element
            }
        });
        
        document.getElementById("editnote-title").value = temp.title;
        document.getElementById("editnote-text").value = temp.text;
    },[])

    return(
        <div className='EditNote'>
            <div className='editnote-wrapper'>
                <div className='safearea'>
                    <div className='color-sign' style={{background:noteColor}}></div>
                    <div className='note-editing'>
                        <div className='title'>
                            <input type="text" id="editnote-title" ></input>
                        </div>
                        <div className='text'>
                            <textarea type="text" id="editnote-text"></textarea>
                        </div>
                    </div>
                </div>
                <div className='toolbar-rear' style={{color:noteColor}}>
                    <button className='def-btn'><FaSave onClick={saveNote}></FaSave></button>
                    <button className='def-btn'><FaTrash onClick={deleteNote}></FaTrash></button>
                    <button className='def-btn'><FaBitbucket onClick={changeColor}></FaBitbucket></button>
                </div>
            </div>
        </div>
    )

}

export default EditNote;