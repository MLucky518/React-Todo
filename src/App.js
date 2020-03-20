import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const tasks = [
  {
    taskname: "Example of some S*** to do",
    id: "",
    finished: false
  }
];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();

    this.state = {
      tasks
    };
  }

  toggleFinished = taskId =>{

    this.setState({
      tasks: this.state.tasks.map(task =>{
        if(taskId === task.id){
          return {
            ...task,
            finished: !tasks.finished
          };
        }
        return task;
      })
    });
  }

  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      taskname: task,
      id: Date.now(),
      finished: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  clearFinished = (e) =>{
    e.preventDefault();

    this.setState({
      tasks:this.state.tasks.filter(task => task.finished === false)
    });
  }

  render() {
    return (
      <div className="App">
        <div className = "header">
          <h2>S*** to do</h2>
        </div>
        <div>
          <TodoList 
          tasks={this.state.tasks} 
          toggleFinished = {this.toggleFinished}
          
          />
        </div>
        <TodoForm 
        addTask ={this.addTask} 
        clearFinished = {this.clearFinished}/>
      </div>
    );
  }
}

export default App;
