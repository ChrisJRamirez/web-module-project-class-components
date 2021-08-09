import React from "react";

const ToDo = props => {
return (
  <div
  onClick = {() => props.toggleTodo(props.toDo.id)}
  // add className to make it change colors when toggled
  className={`toDo${props.toDo.completed ? 'completed' : ''}`}
  >
    <p>{props.toDo.task}</p>

  </div>
  );
};

export default ToDo;