import React, { useContext, useRef } from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";
import { removeAll } from "../context/actions";
import { TodoContext } from "../context/store";

const TodoList = (props) => {
  const contextData = useContext(TodoContext);
  const todoListRef = useRef();

  const localData = () => {
    const stack = [];
    const ls = window.localStorage;
    const length = ls.length;

    for (let todo = 1; todo <= length; todo++) {
      let info = Array(ls[todo]);
      let splittedInfo = info[0].split(" --- ");

      let check = splittedInfo[1] === "true" ? true : false;

      stack.push({
        data: { data: splittedInfo[0], checked: check },
        id: Number(splittedInfo[2]),
      });
    }

    return stack;
  };

  const data = localData();

  const handleRemoveClick = () => {
    const all = [];

    contextData.state.todos.forEach(
      (todo) => !todo.data.checked && all.push(todo)
    );

    removeAll(contextData.dispatch, all);
  };

  const todoListContent = () => {
    if (props.completed) {
      const todos = data.map(
        (todo) =>
          todo.data.checked && (
            <TodoItem
              text={todo.data.data}
              key={todo.id}
              id={todo.id}
              checked={todo.data.checked}
              data={data}
              toRemoveItem
            />
          )
      );

      const deleteAllButton = (
        <button className="delete-all" onClick={handleRemoveClick}>
          <span className="material-icons">delete_outline</span>
          <span className="deleteAll-btn-text">Delete all</span>
        </button>
      );

      return (
        <>
          {todos}
          {deleteAllButton}
        </>
      );
    } else if (props.active) {
      return data.map(
        (todo) =>
          !todo.data.checked && (
            <TodoItem
              text={todo.data.data}
              key={todo.id}
              id={todo.id}
              data={data}
              checked={todo.data.checked}
            />
          )
      );
    } else {
      return data.map((todo) => (
        <TodoItem
          text={todo.data.data}
          key={todo.id}
          id={todo.id}
          data={data}
          checked={todo.data.checked}
        />
      ));
    }
  };

  return (
    <div ref={todoListRef} className="todo-list">
      {todoListContent()}
    </div>
  );
};

export default TodoList;
