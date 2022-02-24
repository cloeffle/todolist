import React from 'react';
import TodoItems from './TodoItems';

function TodoList({ toDo, deleteItem }) {
  return (
    <ul>
      {' '}
      {toDo.map((t) => (
        <TodoItems deleteItem={deleteItem} toDo={t} key={t.id} />
      ))}
    </ul>
  );
}

export default TodoList;

/*
- ul erstellen            CHECKED
- li erstellen            CHECKED
    - id vergeben         CHECKED
    - text mitgeben       CHECKED
*/
