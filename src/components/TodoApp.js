import React, { useContext } from "react";
import { TodoContext } from "../context/store";
import "../styles/TodoApp.css";
import AddTodo from "./AddTodo";
import NavBar from "./NavBar";
import TodoList from "./TodoList";

const TodoApp = () => {
  const data = useContext(TodoContext);

  const mainContent = () => {
    switch (data.state.section) {
      case "All":
        return (
          <>
            <NavBar />
            <AddTodo />
            <TodoList />
          </>
        );

      case "Active":
        return (
          <>
            <NavBar />
            <AddTodo />
            <TodoList active />
          </>
        );

      case "Completed":
        return (
          <>
            <NavBar />
            <TodoList completed />
          </>
        );
      default:
        return;
    }
  };

  return (
    <div className="todo-app">
      <header>#todo</header>
      <main>{mainContent()}</main>
    </div>
  );
};

export default TodoApp;
