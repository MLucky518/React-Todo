import React, { Component } from 'react';
import "./TodoForm.scss";

 class TodoForm extends Component {
     constructor(){
         super();
         this.state = {
             taskname:""
         };
     }

     handleChanges = (e)=>{
         this.setState({ [e.target.name]: e.target.value  });
     }

     sumbitNewTask = (e) =>{
         e.preventDefault();
         this.props.addTask(e,this.state.task);
     };

    render() {
        return (
            <div className = "todo-form-container">
                <label htmlFor = "task">Enter task</label>
                <form onSubmit = {this.sumbitNewTask}>
                    <input 
                    type = "text"
                    name = "task"
                    placeholder = "Task Name" 
                    onChange = {this.handleChanges}/>
                    <button>Add</button>
                </form>

                <button onClick={this.props.clearFinished}>
        Clear Finished Tasks
      </button>
                
            </div>
        )
    }
}

export default TodoForm;
