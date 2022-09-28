import { useState } from "react";
import "./TodoInput.css";
const TodoInput = (props) => {
  const [input, setInput] = useState("");

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
    // setInput({...input,[e.target.name]:e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");

    /*
    const todos=props.todos
    props.addTodo([...todos,input])
    setInput({todo:"",isActive:""})*/
  };

  return (
    <div className="form">
      <form className="todoinput" onSubmit={handleSubmit}>
        <input
          name="todo"
          placeholder="What needs to be done?"
          className="form__input"
          onChange={inputChangeHandler}
          value={input}
        ></input>

        <button onClick={handleSubmit}>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
