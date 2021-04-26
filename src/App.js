import React from "react";
import TodoApp from "./components/TodoApp";
import ContextProvider from "./context/store";

const App = () => {
  return (
    <ContextProvider>
      <div className="app">
        <TodoApp />
      </div>
    </ContextProvider>
  );
};

export default App;
