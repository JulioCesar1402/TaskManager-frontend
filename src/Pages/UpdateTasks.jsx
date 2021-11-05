import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function UpdateTasks() {
  // source: https://ui.dev/react-router-pass-props-to-link/
  const location = useLocation();
  const { id, title, status, description } = location.state;
  const [newTitle, setNewTitle] = useState(title);
  const [newStatus, setnewStatus] = useState(status);
  const [newDescription, setnewDescription] = useState(description);
  const [submitButton, setSubmitButton] = useState(false);
  /*
    .. source: https://blog.rocketseat.com.br/react-hook-swr-melhor-ux-no-consumo-de-api-no-front-end-react/
    Apesar de não utilizar a biblioteca sugerida, não teria pensado em criar
    uma função assíncrona para enviar as informações a api
  */

  const navigate = useNavigate();

  useEffect(() => {
    const updateData = {
      newTitle, newStatus, newDescription,
    };

    const UpdateTask = () => {
      if (submitButton) {
        const put = axios.put(`http://localhost:3001/tasks/${id}`, updateData)
          .then(
            (res) => {
              console.log('Axios:', res);
              console.log('Axios data:', res.data);
            },
          )
          .catch((err) => { console.log('Axios Error:', err); });
        return put;
      }
    };
    return UpdateTask();
  }, [newDescription, newStatus, submitButton, newTitle, navigate, id]);

  return (
    <div>
      <div>
        <label htmlFor="newTitle">
          Title:
          <input
            type="newTitle"
            name="newTitle"
            id="newTitle"
            value={ newTitle }
            onChange={ (insertNewTitle) => setNewTitle(insertNewTitle.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="newStatus">
          Status:
          <input
            type="text"
            name="newStatus"
            id="newStatus"
            value={ newStatus }
            onChange={ (insertNewStatus) => setnewStatus(insertNewStatus.target.value) }
          />
        </label>
      </div>
      <div>
        <label htmlFor="newDescription">
          Description:
          <textarea
            type="text"
            name="newDescription"
            id="newDescription"
            value={ newDescription }
            onChange={ (insertDescrip) => setnewDescription(insertDescrip.target.value) }
          />
        </label>
      </div>
      <button
        type="submit"
        onMouseDown={ () => setSubmitButton(true) }
        onMouseUp={ () => navigate('/') }
      >
        Update
      </button>
    </div>
  );
}

export default UpdateTasks;
