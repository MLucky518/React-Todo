import React from 'react'
import "./Todo.css";

 function Todo(props) {
     console.log(props);
    return (
        <div>
            <h1>{props && props.task.taskname}</h1>
        </div>
    );
}

export default Todo;
