import React, { useState } from "react";
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
    const newTasks = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    });
    setTodo(newTasks);
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
