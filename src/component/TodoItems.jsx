import React from 'react';

function TodoItems() {
  return (
    <li id="ID">
      <input type="checkbox" />
      <p style={{ margin: '0 1rem' }}>TEXT</p>
      <button style={{ margin: '0 1rem' }} className="deleteBtn">
        -
      </button>
      <button style={{ margin: '0 1rem' }}>EDIT</button>
    </li>
  );
}

export default TodoItems;

/************************************************/
/*              NEED PROPS ID & TEXT            */
/************************************************/
