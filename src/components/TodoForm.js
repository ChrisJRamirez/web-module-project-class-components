import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      newTodo: ""
    }
  }

  handleChanges = e => {
    // update state with each value entered
    this.setState({
      ...this.state,
      newTodo: e.target.value
    })
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault()
    // update state with each keystroke ie add new to do
    this.props.addTodo(this.state.newTodo)

  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit} >
        <input
        type="text"
        name="toDo"
        value={this.state.newTodo}
        onChange={this.handleChanges}
        
        />
        <button>Add ToDo</button>

      </form>
    )
  }
}

export default TodoForm