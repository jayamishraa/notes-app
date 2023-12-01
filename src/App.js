import './App.css';
import { nanoid } from 'nanoid';
import InputBox from './components/InputBox';
import { useState } from 'react';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    body: 'You are fleeting cause you cant copy this Copy this Copy that, Every bih that is here copy Cat, Copy the greats thats my number one strategy But beware that you cant copy stats',
    date: '01/01/23'
    }, {
      id: nanoid(),
      body: 'Happiness exists, when you dont know a thing So I hope you dont think this song is about you',
      date: '02/02/23'
      }, {
      id: nanoid(),
      body: 'Turn my bih, T-T, turn my bih',
      date: '12/10/23'
    }, {
      id: nanoid(),
      body: 'I was born in a city Where the winter nights dont ever sleep So this lifes always with meThe ice inside my veins will never bleed',
      date: '1/2/23'
    }
])

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid(),
      body: text,
      date: date.toLocaleDateString()
    }

    const newNoteArray = [...notes, newNote]
    setNotes(newNoteArray)
  }

  const deleteNote = (id) => {
    const newNoteArray = notes.filter(note => note.id !== id)
    setNotes(newNoteArray)
  }
  return (
    <div className="App">
      <InputBox />
      <NotesList 
        notes={notes} 
        addNote={addNote} 
        deleteNote={deleteNote} 
      />
      
    </div>
  );
}

export default App;
