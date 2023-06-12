import { useSelector, useDispatch } from "react-redux";
import {action, todoSelector} from "../../redux/reducers/todoReducer"

import "./ToDoList.css";

function ToDoList() {

  const todos=useSelector(todoSelector);
  const disptach = useDispatch();

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{disptach(action.toggle(index))}}
          >Toggle</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;