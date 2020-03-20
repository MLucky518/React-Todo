import React from "react";
import "./Todo.scss";

function Todo(props) {
  console.log(props);
  return (
    <div className={`task${props.task.finished ? " finished" : ""}`}
    onClick={() => {
        props.toggleFinished(props.task.id);
      }}>
      {/* ternary operator to determine if classname contains finished or not*/}
      <p> {props && props.task.taskname}</p>
      <p> {props && props.task.id}</p>
    </div>
  );
}

export default Todo;
