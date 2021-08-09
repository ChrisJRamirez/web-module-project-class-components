import React from "react";

const ToDo = props => {
return (
  <div
  onClick = {() => props.toggleTodo(props.toDo.id)}
  //can add className to make it change colors when toggled
  >
    <p>{props.toDo.task}</p>

  </div>
  );
};

export default ToDo;