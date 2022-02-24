import React, { useState } from 'react';

function TodoItems({ toDo, deleteItem }) {
  const [isChecked, setIsChecked] = useState('none');

  function markAsChecked(e) {
    setIsChecked(e.target.checked ? 'line-through' : 'none');
  }

  return (
    <li id={toDo.id}>
      <input onClick={(e) => markAsChecked(e)} type="checkbox" />
      <p
        style={{
          margin: '0 1rem',
          display: 'inline-Block',
          textDecoration: isChecked,
        }}
      >
        {toDo.text}
      </p>
      <button
        onClick={(e) => deleteItem(e)}
        style={{ margin: '0 1rem' }}
        className="deleteBtn"
      >
        -
      </button>
      <button style={{ margin: '0 1rem' }}>EDIT</button>
    </li>
  );
}

export default TodoItems;

/*

- Mark as checked     CHECKED
- Edit                

*/
