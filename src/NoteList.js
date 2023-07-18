import React from 'react';
import Note from './Note';
import './styles.css';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note key={index} title={note.title} description={note.description} important={note.important} />
      ))}
    </div>
  );
};

export default NotesList;
