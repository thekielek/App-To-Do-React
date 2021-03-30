import React, { useState, useEffect } from "react";
import "./Createtask.css";

export const CreateTask = ({ todos, setTodo }) => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const addTask = () => {
    const newTasks = [
      ...todos,
      {
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

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const filtredTasks = todos.filter((todo) =>
      todo.text.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setTodo(filtredTasks);
    console.log(filtredTasks);
  };

  return (
    <form className="form">
      <label className="form__searchLabel" htmlFor="searchTask">
        Znajdź zadanie
      </label>
      <input
        className="form__searchInput"
        type="text"
        value={searchValue}
        onChange={handleSearch}
      />
      <label className="form__addLabel" htmlFor="addTask">
        Wpisz nowe zadanie
      </label>
      <input
        className="form__addInput"
        type="text"
        value={value}
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
