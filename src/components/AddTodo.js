import React from "react";
import "../styles/AddTodo.css";

const AddTodo = () => {
  return (
    <div className="add-todo">
      <input type="text" placeholder="Add details" className="add-input" />
      <button className="add-button">Add</button>
    </div>
  );
};

export default AddTodo;
