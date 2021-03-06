import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <div>
      <Link to="/create">
        <button type="button">
          Create new task
        </button>
      </Link>
      <ul>
        {
          tasksList.map(({ _id, title, status, description }) => (
            <li key={ _id }>
              <h2>{ title }</h2>
              <h3>{ status }</h3>
              <p>{ description }</p>
              <DeleteTaskButton taskId={ _id } />
              {/* souce: https://ui.dev/react-router-pass-props-to-link/ */}
              <Link
                to="/update"
                state={ { id: _id, title, status, description } }
              >
                <button type="button">
                  Update
                </button>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Tasks;
