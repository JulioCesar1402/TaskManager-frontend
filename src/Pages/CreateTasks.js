import React, { useEffect } from 'react';
import axios from 'axios';

function CreateTasks() {
  // const [title, setTitle] = useState([]);
  // const [status, setStatus] = useState([]);
  // const [description, setDescription] = useState([]);

  const task = {
    title: 'teste',
    status: 'ok',
    description: 'não esquecer de comprar arroz',
  };

  useEffect(() => {
    axios.post('http://localhost:3001/tasks', { task })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      oi
    </div>
  );
}

export default CreateTasks;
