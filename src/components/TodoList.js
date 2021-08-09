import React from "react";

import Todo from "..//components/Todo"

const ToDoList = props => {
  return (
    <div className="toDoList">
      {props.toDoList.map(toDo => (
        <Todo key={toDo.id} toDo={toDo} toggleTodo={props.toggleTodo} />

      ))}
        <button onClick={props.clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default ToDoList;


