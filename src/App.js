import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./index.css";
import NoteList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "this is my note one ",
    date: "15/2/1990"
  },
  {
    id: nanoid(),
    text: "this is my note two ",
    date: "15/2/1991"
  }, {
    id: nanoid(),
    text: "this is my note three",
    date: "15/2/1992"
  }]);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNotes(savedNotes)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])



  const addNote = (text) => {

    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes)

  }

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id)
    setNotes(newNote)
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container" >
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>

  );

}

export default App;
