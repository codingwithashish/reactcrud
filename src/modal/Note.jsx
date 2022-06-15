import { DeleteForever } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Note = (props) => {
    const deleteNote = () =>{
        props.deleteNote(props.id);
    }
    return ( <> <div className="keep-wrapper mt-3 d-flex flex-wrap">
        <div className="note-wrap p-2">
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            <Button onClick={deleteNote}>
                <DeleteForever/>
            </Button>
        </div>

    </div> </>
     )
 }

 export default Note;