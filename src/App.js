import React from 'react';
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      toDoList:toDoList
    }
  }

  toggleTodo = (toDoId) => {
    console.log("toggling toDo:", toDoId);

    const updatedToDoList = this.state.toDoList.map(toDo => {
      if (toDo.id === toDoId){
        return{...toDo, completed: !toDo.completed}
      }
      else {
        return toDo
      }
    })
    this.setState({
      ...this.state,
      toDoList: updatedToDoList
    })
  }

  addTodo = (toDoName) => {
    console.log("adding a todo:", toDoName);
    this.setState({
      ...this.state,
      toDoList: [
        ...this.state.toDoList,
        {
          task: toDoName,
          id: Date.now(),
          completed:false,
        }
      ]
    })
  }

  clearCompleted = () => {
    this.setState({
      ...this.state,
      toDoList: this.state.toDoList.filter(toDo => !toDo.completed)
    })
  }
  
  render() {
    return (
      <div>
        <h1> To Do List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <ToDoList
        toDoList= {this.state.toDoList}
        toggleTodo = {this.toggleTodo}
        clearCompleted = {this.clearCompleted}
        
        />
      </div>
    );
  }
}

export default App;
