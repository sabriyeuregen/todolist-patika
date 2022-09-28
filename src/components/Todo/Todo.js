import "./Todo.css";
const Todo = (props) => {
  return (
    <div className="todo">
      {props.todos.map((todo, index) => (
      
        <div className="todo__list">
            <div>
           <input className="toggle-all" type="checkbox" />
           
        </div>
          <div>
            
            <div className="todo__text">{todo.text}</div>
          </div>
          <div>
            <button className="todo__deletebutton" onClick={() => props.removeHandler(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
