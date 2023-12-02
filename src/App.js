import './App.css';
import { nanoid } from 'nanoid';
import InputBox from './components/InputBox';
import { useEffect, useState } from 'react';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    body: 'You are fleeting cause you cant copy this Copy this Copy that, Every bih that is here copy Cat, Copy the greats thats my number one strategy But beware that you cant copy stats',
    date: '08/08/23'
    }, {
      id: nanoid(),
      body: 'Happiness exists, when you dont know a thing So I hope you dont think this song is about you',
      date: '09/09/23'
      }, {
      id: nanoid(),
      body: 'Turn my bih, T-T, turn my bih',
      date: '10/10/23'
    }, {
      id: nanoid(),
      body: 'I was born in a city Where the winter nights dont ever sleep So this lifes always with meThe ice inside my veins will never bleed',
      date: '11/11/23'
    }
])
  const [inputVal, setInputVal] = useState('')
  const handleInput = (e) => {
    setInputVal(e.target.value)
    console.log(e.target.value)
  }

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

  // useEffect(()=>{
  //   const savedNotes = JSON.parse(
  //     localStorage.getItem('react-notes-data')
  //   )
  //   if (savedNotes) {
  //     setNotes(savedNotes)
  //   }
  // },[])

  // useEffect(()=>{
  //   localStorage.setItem(
  //     'react-notes-data', 
  //     JSON.stringify(notes)
  //   )
  // },[notes])

  return (
    <div className="App">
      <InputBox setInputVal={setInputVal} />
      <NotesList 
        notes={notes.filter(note=> note.body.toLocaleLowerCase().includes(inputVal))} 
        addNote={addNote} 
        deleteNote={deleteNote} 
        handleInput={handleInput}
      />
      
    </div>
  );
}

export default App;
