import React from 'react';
import { v4 as uuidv4 } from 'uuid';

function Form({ userInput, setUserInput, toDo, setToDo }) {
  const userInputHandler = (e) => {
    setUserInput(e.target.value);
  };

  const addBtnHandler = (e) => {
    e.preventDefault();
    setToDo([...toDo, { text: userInput, id: uuidv4() }]);
    setUserInput('');
  };

  return (
    <form>
      <input value={userInput} onChange={userInputHandler} type="text" />
      <button onClick={addBtnHandler}>Add</button>
    </form>
  );
}

export default Form;

/*

- ToDo eingebe in textfeld      CHECKED
- klick auf add                 CHECKED
- textfeld speichern            CHECKED
- textfeld leeren               CHECKED

*/
