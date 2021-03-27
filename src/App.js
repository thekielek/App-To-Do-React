import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { CreateTask } from "./components/Createtask";
import { Task } from "./components/Task";

export function App() {
  const [todos, setTodo] = useState([]);

  const handleRemove = (index) => {
    const newTasks = [...todos];
    newTasks.splice(index, 1);
    setTodo(newTasks);
  };

  const handleCompleted = (index) => {
    const newTasks = [...todos];
    newTasks[index].completed = true;
    setTodo(newTasks);
  };

  return (
    <div className="App">
      <Header />
      <CreateTask todos={todos} setTodo={setTodo} />
      <section className="tasks">
        {todos.map((todo, index) => (
          <Task
            todo={todo}
            key={index}
            index={index}
            handleRemove={handleRemove}
            handleCompleted={handleCompleted}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
