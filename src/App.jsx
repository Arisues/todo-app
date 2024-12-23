import React, { useState } from "react";
import Header from "./components/Header";
import All from "./components/All";
import Completed from "./components/Completed";
import Active from "./components/Active";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, active: true }]);
    }
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, active: !task.active } : task
      ));
  };

  const deleteCompletedTasks = () => {
    setTasks(tasks.filter((task) => task.active));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <Header />
      <All filter={filter} setFilter={setFilter} />
      <Active addTask={addTask} />
      <Completed
        tasks={tasks}
        toggleTask={toggleTask}
        filter={filter}
        deleteCompletedTasks={deleteCompletedTasks}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;