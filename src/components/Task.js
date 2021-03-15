import React from "react";
import "./Task.css";

export const Task = ({ todo, handleRemove, handleCompleted, index }) => {
  return (
    <div className="task">
      <p
        className="task__title"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        <span className="task__date"></span>
        {todo.text}
      </p>
      <div className="button__container">
        <button className="button__container--remove" onClick={handleRemove}>
          Usuń
        </button>
        <button
          className="button__container--completed"
          onClick={() => handleCompleted(index)}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
