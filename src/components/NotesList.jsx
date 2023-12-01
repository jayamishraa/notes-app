import React from 'react'
import Note from './Note'
import NewNote from './NewNote'

const NotesList = ({notes, addNote, deleteNote}) => {
  return (
    <div className='notes-list'>
      {notes.map(note=>{
        return(
          <Note 
            id={note.id}
            body={note.body}
            date={note.date}
            deleteNote={deleteNote}
          />
        )
      })}
      <NewNote addNote={addNote}/>
    </div>
  )
}

export default NotesList
