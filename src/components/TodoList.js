import React from "react";

import ToDo from "./Todo"

const ToDoList = props => {
  return (
    <div className="toDoList">
      {props.toDoList.map(toDo => (
        <ToDo key={toDo.id} toDo={toDo} togglePurchased={props.togglePurchased} />
      ))}
      <button
        onClick={props.clearCompleted}Clear Completed>
      </button>
    </div>
  )
};

export default ToDoList;