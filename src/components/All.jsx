import React from "react";
import "../App.css";
const All = ({ filter, setFilter }) => {
  return (
    <div className="tabs">
      <button className={filter === "all" ? "active-tab" : ""} onClick={() => setFilter("all")}>All</button>
      <button className={filter === "active" ? "active-tab" : ""} onClick={() => setFilter("active")}>Active</button>
      <button className={filter === "completed" ? "active-tab" : ""} onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
};

export default All;