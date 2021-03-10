import React, { useState } from "react";
import "./Createtask.css";

export const CreateTask = ({ todos, setTodo }) => {
  const [value, setValue] = useState("");

  const addTask = () => {
    const newTasks = [
      ...todos,
      {
        id: todos.length + 1,
        text: value,
        completed: false,
      },
    ];
    setTodo(newTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTask();
    setValue("");
  };

  return (
    <form className="form">
      <label className="form__searchLabel" htmlFor="searchTask">
        Znajdź zadanie
      </label>
      <input className="form__searchInput" type="text" />
      <label className="form__addLabel" htmlFor="addTask">
        Wpisz nowe zadanie
      </label>
      <input
        className="form__addInput"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <input
        className="form__button"
        type="submit"
        value="Dodaj zadanie"
        onClick={handleSubmit}
      />
    </form>
  );
};
