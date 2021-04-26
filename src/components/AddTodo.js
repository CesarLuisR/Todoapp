import React, { useContext, useState } from "react";
import "../styles/AddTodo.css";
import { getTodo } from "../context/actions";
import { TodoContext } from "../context/store";

const AddTodo = () => {
  const [inputData, setInputData] = useState("");
  const data = useContext(TodoContext);

  const handleChangeInput = (e) => setInputData(e.target.value);

  const handleSubmitTodo = (e) => {
    e.preventDefault();
    getTodo(data.dispatch, { data: inputData, checked: false });
    e.target.reset();
  };

  return (
    <form className="add-todo" onSubmit={handleSubmitTodo}>
      <input
        onChange={handleChangeInput}
        type="text"
        placeholder="Add details"
        className="add-input"
        required
      />
      <input type="submit" value="Add" className="add-button" />
    </form>
  );
};

export default AddTodo;
