import React, { useState } from "react";

// import the bootstrap styles from node_modules folder
import "bootstrap/dist/css/bootstrap.css";
// import bootstrap icons library
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";

// import task components from the components folder
import TaskTable from "./components/TaskTable";
import TaskInput from "./components/TaskInput";

// import Task class
import { Task } from "./models/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function onCreateTask(taskName) {
    // create a new task
    const task = new Task(
      new Date().getTime(), //Epoch time, a unique number
      taskName,
      false
    );

    // add the task to list
    setTasks([...tasks, task]);
  }

  function onToggleComplete(taskId) {
    // find task to toggle
    const taskToToggle = tasks.find((task) => (task.id === taskId));
    
    // toggle complete
    taskToToggle.complete = !taskToToggle.complete;

    // update the task list state -> if we find the task that we want to change we assign the one we desire to it
    // (taskToToggle)
    setTasks(tasks.map((task) => {
      return task.id === taskId ? taskToToggle : task;
    }));
  }

  function onRemoveTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="container my-4">
      <div className="card card-body text-center">
        <h1>Task List</h1>
        <hr></hr>
        <p>Our simple task list</p>

        <TaskInput onCreateTask={onCreateTask}/>
        <TaskTable onToggleComplete={onToggleComplete} onRemoveTask={onRemoveTask} tasks={tasks}/>
      </div>
    </div>
  );
}
