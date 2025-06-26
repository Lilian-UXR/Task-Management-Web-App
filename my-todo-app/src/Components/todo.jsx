import React, { useState } from "react";

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);
  }

  return (
    <div className="todo">
      <h1>To Do</h1>
      <div>
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
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="deletebtn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
