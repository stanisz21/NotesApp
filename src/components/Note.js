import React from "react";
import { MdDeleteForever } from 'react-icons/md'


const Note = ({ id, text, date, deleteNote }) => {
    return (
        <div className="note" id={id}>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
                    onClick={() => deleteNote(id)}
                    className='delete-icon'
                    size="1.3em" />
            </div>
        </div>
    )
}

export default Note;