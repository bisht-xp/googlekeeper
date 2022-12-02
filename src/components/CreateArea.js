import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  
  const [condition, setCondition] = useState(false)

  const createNote = (event) => {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.fullNote(note);
    setNote(() => {
      return {
        title: "",
        content: "",
      };
    });
  };


  return (
    <div>
      <form onSubmit={submitHandler} className="create-note">
        {condition && <input
          onChange={createNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea
          onChange={createNote}
          name="content"
          placeholder="Take a note..."
          rows= {!condition ? "1" : "3"}
          value={note.content}
          onClick={()=> setCondition(true)}
        />
        <Zoom in={condition}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
