import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";
import "./TodoWrapper.css";
const TodoWrapper = () => {
  return (
    <div className="wrapper">
      <label className="wrapper__label">todos</label>
      <TodoList></TodoList>
    </div>
  );
};

export default TodoWrapper;
