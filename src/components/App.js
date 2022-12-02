import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  const addNote = (note) => {
    setNewNote((prevItem)=> {
      return [
        ...prevItem, {...note}
      ]
    });
  }
  // console.log(newNote);
 

  return (
    <div>
      <Header />
      <CreateArea fullNote={addNote}/>
      {newNote.map((item, index)  => {
        return <Note key={index} title={item.title} content={item.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;
