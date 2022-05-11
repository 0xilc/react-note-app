import React from 'react'
import { BiNote,BiSearch } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Header = () =>{
  const navigate = useNavigate();
  return (
    <div className='Header'>
      <div className='header-wrapper'>
        <div className='safearea'>
          <div className='logo-wrapper' onClick={()=>{navigate("/")}}>
            <BiNote className='icon'></BiNote><h1>Wersnote</h1>
          </div>
          <div className='search-wrapper'>
              <input type="text" placeholder='Search a note...'></input>
              <BiSearch className='icon'/>
          </div>
        </div>
        
      </div> 
    </div>
  )
}

export default Header;