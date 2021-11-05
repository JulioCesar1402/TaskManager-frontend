import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

function CreateTasks() {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [submitButton, setSubmitButton] = useState(false);
  /*
    .. source: https://blog.rocketseat.com.br/react-hook-swr-melhor-ux-no-consumo-de-api-no-front-end-react/
    Apesar de não utilizar a biblioteca sugerida, não teria pensado em criar
    uma função assíncrona para enviar as informações a api
  */

  const navigate = useNavigate();

  useEffect(() => {
    const postData = {
      title, status, description,
    };

    const CreatePost = async () => {
      if (submitButton) {
        const post = await axios.post('http://localhost:3001/tasks', postData)
          .then(
            (res) => {
              console.log('Axios:', res);
              console.log('Axios data:', res.data);
            },
          )
          .catch((err) => { console.log('Axios Error:', err); });
        return post;
      }
    };
    return CreatePost();
  }, [description, status, submitButton, title, navigate]);

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
          <textarea
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
        onMouseUp={ () => navigate('/') }
      >
        Add
      </button>
    </div>
  );
}

export default CreateTasks;
