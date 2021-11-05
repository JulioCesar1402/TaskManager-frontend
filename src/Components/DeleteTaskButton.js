import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function DeleteTaskButton(props) {
  const [deleteButton, setDeleteButton] = useState(false);
  /*
    .. source: https://blog.rocketseat.com.br/react-hook-swr-melhor-ux-no-consumo-de-api-no-front-end-react/
    Apesar de não utilizar a biblioteca sugerida, não teria pensado em criar
    uma função assíncrona para enviar as informações a api
  */
  useEffect(() => {
    const removeTask = async () => {
      if (deleteButton) {
        const remove = await axios.delete(`http://localhost:3001/tasks/${props.taskId}`)
          .then(
            (res) => {
              console.log('Axios:', res);
              console.log('Axios data:', res.data);
            },
          )
          .catch((err) => { console.log('Axios Error:', err); });
        return remove;
      }
    };
    return removeTask();
  }, [deleteButton, props]);

  return (
    <div>
      <a href="http://localhost:3000/">
        <button
          type="submit"
          onMouseDown={ () => setDeleteButton(true) }
          onMouseUp={ () => setDeleteButton(false) }
        >
          remove
        </button>
      </a>
    </div>
  );
}

export default DeleteTaskButton;
// source: https://github.com/yannickcr/eslint-plugin-react/issues/2135
DeleteTaskButton.propTypes = {
  taskId: PropTypes.string.isRequired,
};
