import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  handleChanges = e => {
    //update state with each new to-do
    this.setState({
      ...this.state,
      newTodo: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault()
    // update state with each new To-do
    this.props.addTodo(this.state.newTodo)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        name="Todo"
        value={this.state.newTodo}
        onChange={this.handleChanges}
        />
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }

}

export default TodoForm