import React, { createContext } from "react";

const TodoContext = createContext();

const ContextProvider = (props) => {
  const data = "hola";

  return (
    <TodoContext.Provider value={data}>{props.children}</TodoContext.Provider>
  );
};

export default ContextProvider;
