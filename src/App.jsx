import React, { useState } from 'react';
import Form from './component/Form';
import TodoList from './component/TodoList';

function App() {
  const [userInput, setUserInput] = useState('');
  const [toDo, setToDo] = useState([]);

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form
        toDo={toDo}
        setToDo={setToDo}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <TodoList toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
