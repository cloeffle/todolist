import React, { useState } from 'react';
import Form from './component/Form';
import TodoList from './component/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [userInput, setUserInput] = useState('');
  const [toDo, setToDo] = useState([]);

  const changeInput = (e) => {
    setUserInput(e.target.value);
  };

  const resetInput = (e) => {
    e.preventDefault();
    setToDo([...toDo, { text: userInput, id: uuidv4() }]);
    setUserInput('');
  };

  function deleteItem(e) {
    console.log(toDo);
    const newArray = toDo.filter(
      (object) => object.id !== e.target.parentNode.id
    );
    setToDo(newArray);
    console.log(newArray);
  }

  return (
    <div className="App">
      <header>
        <h1>To-do List</h1>
      </header>
      <Form
        toDo={toDo}
        setToDo={setToDo}
        userInput={userInput}
        resetInput={resetInput}
        changeInput={changeInput}
      />
      <TodoList toDo={toDo} deleteItem={deleteItem} setToDo={setToDo} />
    </div>
  );
}

export default App;
