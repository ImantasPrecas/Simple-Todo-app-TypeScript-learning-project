import { useRef, useContext } from 'react';

import { TodosContext } from '../Store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const formSubmitionHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitionHandler}>
      <label htmlFor='text'>Todo text</label>
      <input ref={todoTextInputRef} type='text' id='text' />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
