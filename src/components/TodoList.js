import React from "react";

import ToDo from "./Todo"

const ToDoList = props => {
  return (
    <div className="toDoList">
      {props.toDoList.map(toDo => (
        <ToDo key={toDo.id} toDo={toDo} toggleTodo={props.toggleTodo} />
      ))}
      <button
        onClick={props.clearCompleted}Clear Completed>
          Clear Completed
      </button>
    </div>
  )
};

export default ToDoList;