import React from 'react'
import { FaPlus } from "react-icons/fa";

const EmptyBox = () => {
  return (
    <div className='EmptyBox'>
        <div className='emptybox-wrapper'>
            <FaPlus className='add-btn'/>
        </div>
    </div>
  )
}

export default EmptyBox