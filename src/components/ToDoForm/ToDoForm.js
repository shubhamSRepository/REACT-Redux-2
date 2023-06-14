import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../../redux/reducers/todoReducer"
import { notificationSelector, notificationResetAction } from "../../redux/reducers/notificationReducer";

import "./ToDoForm.css";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const disptach = useDispatch();
  const message = useSelector(notificationSelector);

  if(message){
    setTimeout(()=>{
      disptach(notificationResetAction());
    },3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoText("");
    disptach(action.add(todoText));
  };

  return (
    <div className="container">

      {
        message &&
        <div className="alert alert-success" role="alert">
          {message}
        </div>

      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-3"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="btn btn-success float-end" type="submit">Create Todo</button>
      </form>
    </div>
  );
}

export default ToDoForm;