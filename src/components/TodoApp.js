import React from "react";
import "../styles/TodoApp.css";
import AddTodo from "./AddTodo";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="todo-app">
      <header>#todo</header>
      <main>
        <NavBar />
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
};

export default TodoApp;
