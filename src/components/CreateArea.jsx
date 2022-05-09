import React, { useState } from "react";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [zoom, setZoom] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function expand() {
    setZoom(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoom ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={zoom ? 3 : 1}
        />
        <Fab onClick={submitNote}>
          <AddCircleRoundedIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
