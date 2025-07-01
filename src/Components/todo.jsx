import React, { useState, useReducer } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const initialState = { tasks: tasks, filter: "ALL" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  //to add tasks
  function addTask() {
    if (newTask.trim() !== "") {
      //if it is not empty then add a task
      setTasks((t) => [...t, { task: newTask, completed: false }]); //task is added as a object (task-what it is called and if it is completed)
      setNewTask(""); //clear input after task has been added
    }
  }

  //to update completion status of single tasks
  function updateTasks(index) {
    const updateTasks = [...tasks]; //to make a copy
    updateTasks[index].completed = !updateTasks[index].completed; //to change the completion status to the opposite
    setTasks(updateTasks); //update task to our new task
  }

  // delete tasks
  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index); //check filter function to see if it matches and item gets removed
    setTasks(updateTasks); //tasks updated
  }

  //reducer used to change the state
  function reducer(state, action) {
    switch (
      action.type //switch takes in action type to setting our filter
    ) {
      case "SET_FILTER":
        return action.payload; //return filer that was passed
      default:
        return state;
    }
  }

  //filtered tasks applying the filter of the state
  const filteredTasks = tasks.filter((task) => {
    if (state === "DONE") return task.completed; //reducer reduce to done- everything completed
    if (state === "ACTIVE") return !task.completed; //reducer reduce to active - everything not completed
    return true; //to return everything for all
  });

  return (
    <div className="todo-box">
      <div className="allfilterbtn">
        {/* for our buttons, we have action type and action payload and that is what is changing; buttons are changing the state */}
        <button
          className="filterbtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}
        >
          All
        </button>
        <button
          className="filterbtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: "ACTIVE" })}
        >
          Active
        </button>
        <button
          className="filterbtn"
          onClick={() => dispatch({ type: "SET_FILTER", payload: "DONE" })}
        >
          Done
        </button>
      </div>
      {/* to input tasks */}
      <div className="todo">
        <h1>To Do</h1>
        <div className="task-add">
          <input
            type="text"
            placeholder="Task..."
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="addbtn" onClick={addTask}>
            ADD
          </button>
        </div>

        <ul>
          {/* to map through each task and filtered through; helps with output of what is being shown */}
          {filteredTasks.map((task, index) => (
            <li className="todo-item" key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => updateTasks(index)}
              />
              <span className="text">{task.task}</span>
              <button className="deletebtn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;
