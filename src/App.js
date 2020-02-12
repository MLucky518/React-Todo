import React, { Component } from "react";
import TodoList from "./components/TodoComponents/TodoList";

const tasks = [
  {
    taskname: "gym",
    id: 1,
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
  render() {
    return (
      <div className="App">
        <div>
          <h2>Welcome to your Todo App!</h2>
        </div>
        <div>
          <TodoList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
