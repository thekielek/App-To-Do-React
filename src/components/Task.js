import React from "react";
import "./Task.css";

export const Task = ({ todo }) => {
  return (
    <div className="task">
      <p className="task__item">{todo.text}</p>
    </div>
  );
};
