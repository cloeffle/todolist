import React from 'react';

function Form({ userInput, setUserInput, toDo, resetInput, changeInput }) {
  const userInputHandler = (e) => {
    changeInput(e);
  };

  const addBtnHandler = (e) => {
    resetInput(e);
  };

  return (
    <form>
      <input
        value={userInput}
        onChange={(e) => userInputHandler(e)}
        type="text"
      />
      <button onClick={(e) => addBtnHandler(e)}>Add</button>
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
