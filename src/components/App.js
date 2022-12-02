import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  const addNote = (note) => {
    setNewNote((prevItem) => {
      return [...prevItem, note];
    });
  };

  const deleteMe = (id) => {
    setNewNote((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea fullNote={addNote} />
      {newNote.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            removeNote={deleteMe}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
