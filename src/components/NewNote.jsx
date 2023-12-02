import React, { useState } from 'react'

function NewNote({addNote}) {
  const [newNote, setNewNote] = useState('')
  const charLimit = 250

  const handleChange = (e) => {
    if(charLimit - e.target.value.length >= 0){
      setNewNote(e.target.value)
    }
  }

  const handleSaveNewNote = () => {
    if (newNote.trim().length > 0){
      addNote(newNote)
    }
    setNewNote('')
  }
  
  return (
    <div className='note new-note'>
      <div className='footer'>
        <small>{charLimit - newNote.length} characters remaining</small>
        <button onClick={handleSaveNewNote} className='button'>✔</button>
      </div>
      <textarea 
        rows='8' 
        cols='10'
        value={newNote}
        placeholder='Add note...'
        onChange={handleChange}
      ></textarea>
    </div>
  )
}

export default NewNote
