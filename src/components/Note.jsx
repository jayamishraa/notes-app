import React from 'react'

const Note = ({id, body, date, deleteNote}) => {
    
  return (
    <div className='note'>
        <div className='header'>
          <small>{date}</small>
          <button onClick={()=>deleteNote(id)} className='button'>✗</button>
        </div>
        
        <span>{body}</span>
    </div>
  )
}

export default Note
