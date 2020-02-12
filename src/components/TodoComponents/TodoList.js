// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  console.log(props);
  return (
    <div className="todo-container">
      {props &&
        props.tasks.map(task => {
          return <Todo key={task} task={task} />;
        })}
        <button>hi</button>
    </div>
  );
}
export default TodoList;
