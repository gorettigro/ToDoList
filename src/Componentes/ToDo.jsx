import React from "react";

//Styles
import "../Styles/ToDo.css";

const Todo = ({ title, status, handleCompleteTodo, id }) => {

  
  return (
    <div className="todo-card">
      
      <div className="todo-title">
        <h4 className="tittle">{id}| {title}</h4>
      </div>
      <div className="todo-actions">
        <button
          className={status ? "complete" : "reset"}
          onClick={() => handleCompleteTodo(id)}
        >
          {status ? "Completed" : "Uncomplete"}
        </button>
      </div>
    </div>
  );
};

export default Todo;