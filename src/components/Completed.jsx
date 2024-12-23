import React from "react";

const Completed = ({ tasks, toggleTask, filter, deleteCompletedTasks, deleteTask }) => {
  const filteredTasks = filter === "all" ? tasks : filter == "active" ? tasks.filter((task) => task.active) : tasks.filter((task) => !task.active);

  return (
    <div>
      <ul className = "task-list">
        {filteredTasks.map((task, index) => (
          <li key = {index}>
            <input type = "checkbox" checked={!task.active} onChange={() => toggleTask(index)}/>
            <span style = {{ textDecoration: task.active ? "none" : "line-through"}}>{task.text}</span>

            {!task.active && filter === "completed" && (<button className="delete-task" onClick={() => deleteTask(index)}>🗑️</button>)}
          </li>
        ))}
      </ul>

      {filter === "completed" && filteredTasks.length > 0 && (
        <button className="delete-all" onClick={deleteCompletedTasks}>Delete all</button>
      )}
    </div>
  );
};

export default Completed;