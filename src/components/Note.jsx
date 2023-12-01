import React, { useState } from 'react'

const Note = ({id, body, date, deleteNote}) => {
    
  return (
    <div className='note'>
        <span>{body}</span>
        <div className='footer'>
          <small>{date}</small>
          <button onClick={()=>deleteNote(id)} className='button'>✗</button>
        </div>
    </div>
  )
}

export default Note
