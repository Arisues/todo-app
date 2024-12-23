import React, { useState } from "react";
import "../App.css";
const Active = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    addTask(inputValue);
    setInputValue("");
  };

  return (
    <div className="add-task">
      <input
        type = "text"
        value = {inputValue}
        placeholder = "Add details"
        onChange = {(e) => setInputValue(e.target.value)}
        onKeyDown = {(e) => {
          if (e.key === "Enter") handleAddTask();
        }}
      />
      <button onClick = {handleAddTask}>Add</button>
    </div>
  );
};

export default Active;