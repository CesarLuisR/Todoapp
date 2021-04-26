import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

export const TodoContext = createContext();

const ContextProvider = (props) => {
  const ls = window.localStorage;

  const localData = () => {
    const stack = [];
    const length = ls.length;

    for (let todo = 1; todo <= length; todo++) {
      let info = Array(ls[todo]);
      let splittedInfo = info[0].split(" --- ");

      let check = splittedInfo[1] === "true" ? true : false

      stack.push({
        data: { data: splittedInfo[0], checked: check },
        id: todo,
      });
    }

    return stack;
  };

  const initialData = localData();

  const initialState = {
    todos: initialData,
    section: "All",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };

  state.todos.forEach((element) => {
    ls.setItem(
      `${element.id}`,
      `${element.data.data} --- ${element.data.checked}`
    );
  });

  return (
    <TodoContext.Provider value={data}>{props.children}</TodoContext.Provider>
  );
};

export default ContextProvider;
