import React from "react";

const ToDo = props => {
  return (
    <div
    onClick = {() => props.togglePurchased(props.toDo.id)}
    className={`toDo${props.toDo.completed ? "completed" : ""}`}
    >
      <p>{props.toDo.task}</p>

    </div>
  )
};

export default ToDo