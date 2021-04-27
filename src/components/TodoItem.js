import React, { useState, useEffect, useRef, useContext } from "react";
import "../styles/TodoItem.css";
import { getTodoFilter, removeTodo } from "../context/actions";
import { TodoContext } from "../context/store";

const TodoItem = (props) => {
  const data = useContext(TodoContext);
  const [checked, setChecked] = useState(props.data[props.id - 1].data.checked);
  const labelRef = useRef();

  const handleCheckboxClick = (e) => {
    setChecked(e.target.checked);
    getTodoFilter(data, {
      data: { data: props.text, checked: e.target.checked },
      id: props.id,
    });
  };

  const handleRemoveClick = () => {
    removeTodo(data, props.id);
  };

  useEffect(() => {
    if (checked) labelRef.current.style.textDecorationLine = "line-through";
    else labelRef.current.style.textDecorationLine = "none";
  }, [data, checked, props]);

  return (
    <div className="todo-item" data-id={props.id} data-checked={checked}>
      <div className="todo-item__content">
        <input
          type="checkbox"
          name="text"
          id={props.text}
          className="checkbox"
          onClick={handleCheckboxClick}
          defaultChecked={checked}
        />
        <label ref={labelRef} className="text" htmlFor={props.text}>
          {props.text}
        </label>
      </div>
      {props.toRemoveItem && (
        <span className="material-icons icon-color" onClick={handleRemoveClick}>
          delete_outline
        </span>
      )}
    </div>
  );
};

export default TodoItem;
