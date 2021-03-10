import "./App.css";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { CreateTask } from "./components/Createtask";
import { Task } from "./components/Task";

export function App() {
  const [todos, setTodo] = useState([]);

  return (
    <div className="App">
      <Header />
      <CreateTask todos={todos} setTodo={setTodo} />
      <section className="tasks">
        {todos.map((todo) => (
          <Task todo={todo} key={todo.id} />
        ))}
      </section>
    </div>
  );
}

export default App;
