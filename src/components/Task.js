import React from "react";
import "./Task.css";

export const Task = ({ todo }) => {
  const newDate = new Date().toLocaleTimeString();
  console.log(newDate);
  return (
    <div className="task">
      <p className="task__title">
        {newDate}
        {todo.text}
      </p>
      <button className="task__button">Usuń</button>
    </div>
  );
};
