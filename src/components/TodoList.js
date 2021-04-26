import React from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
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
        id: todo,
      });
    }

    return stack;
  };

  const data = localData();

  const todoListContent = () => {
    if (props.completed) {
      return data.map(
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

  return <div className="todo-list">{todoListContent()}</div>;
};

export default TodoList;
