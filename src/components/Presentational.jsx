import React from "react";
import { addTask, deleteTask, toggleTask } from "../redux/actions";

export const Presentational = ({ tasks, addTask, toggleTask, deleteTask }) => {
  const [input, setInput] = React.useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    addTask(input);
    setInput("");
  };

  return (
    <div className="todo-container">
      <h2>My ToDo List</h2>

      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id)}
              className={`task-text ${task.completed ? "completed" : ""}`}
            >
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
