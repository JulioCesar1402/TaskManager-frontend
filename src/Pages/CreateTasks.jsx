import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CreateTasks() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [submitButton, setSubmitButton] = useState(false);

  useEffect(() => {
    if (submitButton) {
      axios.post('http://localhost:3001/tasks', { title, status, description })
        .then(
          (res) => {
            console.log('Axios:', res);
            console.log('Axios data:', res.data);
          },
        )
        .catch((err) => { console.log('Axios Error:', err); });
    }
  }, [submitButton, title, status, description]);

  return (
    <div>
      <div>
        <label htmlFor="title">
          Title:
          <input
            type="title"
            name="title"
            id="title"
            onChange={ (insertTitle) => setTitle(insertTitle.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="status">
          Status:
          <input
            type="text"
            name="status"
            id="status"
            onChange={ (insertTitle) => setStatus(insertTitle.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            id="description"
            onChange={ (insertTitle) => setDescription(insertTitle.target.value) }
          />
        </label>
      </div>
      <button
        type="submit"
        onMouseDown={ () => setSubmitButton(true) }
        onMouseUp={ () => setSubmitButton(false) }
      >
        Add
      </button>
    </div>
  );
}

export default CreateTasks;
