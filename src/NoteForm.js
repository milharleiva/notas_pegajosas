import React, { useState } from 'react';
import './styles.css';

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [important, setImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      setErrorMessage('Por favor, ingresa una descripción para la nota.');
      return;
    }

    const newNote = {
      title,
      description,
      important,
    };

    addNote(newNote);

    setTitle('');
    setDescription('');
    setImportant(false);
    setErrorMessage(null);
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    <h1 className="display-1 text-center">Notas</h1>
      <div className='row'>
        <div className='col-12'>
          <input className="form-control" type="text" placeholder="Ingrese el Titulo De su Nota!" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='col-12 mt-3'>
          <textarea className="form-control" rows="1" placeholder="Ingrese la Descripcion de Su Nota" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
        <div className='col-12 mt-3 d-flex justify-content-between align-items-center'>
          <div className='form-check'>
            <input className="form-check-input" type="checkbox" checked={important} onChange={(e) => setImportant(e.target.checked)} />
            <label className="form-check-label">Importante</label>
          </div>
          <button className="btn btn-primary my-3" type="submit">Agregar Nota</button>
        </div>
      </div>
    </form>
</div>




  );
};

export default NoteForm;
