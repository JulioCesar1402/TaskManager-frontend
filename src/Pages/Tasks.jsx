import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteTaskButton from '../Components/DeleteTaskButton';

function Tasks() {
  const [tasksList, setTasksList] = useState([]);
  // source: https://www.digitalocean.com/community/tutorials/react-axios-react
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
        tasksList.map(({ _id, title, status, description }) => (
          <li key={ _id }>
            <h2>{ title }</h2>
            <h3>{ status }</h3>
            <p>{ description }</p>
            <DeleteTaskButton taskId={ _id } />
          </li>
        ))
      }
    </ul>
  );
}

export default Tasks;
