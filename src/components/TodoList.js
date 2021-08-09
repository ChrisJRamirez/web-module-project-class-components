import React from "react";

import Todo from "..//components/Todo"

const ToDoList = props => {
  return (
    <div className="toDoList">
      {props.toDoList.map(toDo => (
        <Todo key={toDo.id} toDo={toDo} toggleTodo={props.toggleTodo} />

      ))}
    </div>
  )
}

export default ToDoList;


