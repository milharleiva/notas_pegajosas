import React from 'react';
import './styles.css';

const Note = ({ title, description, important }) => {
  return (
    <div className={important ? "note important-note" : "note"}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Note;