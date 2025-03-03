import React from "react";
import '../css/ListItem.css'

const ListItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTask(task.id)}>
        {task.completed ? <del>{task.text}</del> : task.text}
      </span>
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
};

export default ListItem;