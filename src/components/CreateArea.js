import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const createNote = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
 
  
  const submitHandler = (event) => {
    event.preventDefault();
    props.fullNote(note);
    setNote(()=> {
        return {
            title: "",
            content: ""
        }
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={createNote} name="title" placeholder="Title" value={note.title}/>
        <textarea
          onChange={createNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
