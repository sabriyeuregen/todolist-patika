import { useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import Todo from "../Todo/Todo";
import "./TodoList.css"
const TodoList = (props) => {

  const [todos, setTodos] = useState([]);

  const addTodo=(todo)=>{

    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  }



  const removeHandler = id => {

    const removeItem = todos.filter((item) => item.id !== id);

   setTodos(removeItem);

    //props.setTodos(props.todos.filter(item=> item.id!==props.todos.id))
  };

  return (
    <div>
      
      <TodoInput onSubmit={addTodo}></TodoInput>
      <Todo  todos={todos} removeHandler={removeHandler}></Todo>
    </div>
  );
};

export default TodoList;
