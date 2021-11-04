import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import api from '../services/api';

function Tasks() {
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(({ data }) => setTasksList(data.tasks))
      .catch((err) => {
        console.error(`ops! something get wrong ${err}`);
      });
  }, []);

  return (
    <ul>
      {
        tasksList.map(({ title, status, description }, id) => (
          <li key={ id }>
            <h2>{ title }</h2>
            <h3>{ status }</h3>
            <p>{ description }</p>
          </li>
        ))
      }
    </ul>
  );
}

export default Tasks;
