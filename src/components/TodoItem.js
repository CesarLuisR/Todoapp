import React, { useState, useEffect, useRef } from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  const [checked, setChecked] = useState(false);
  const labelRef = useRef();

  const handleCheckboxClick = (e) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    if (checked) labelRef.current.style.textDecorationLine = "line-through";
    else labelRef.current.style.textDecorationLine = "none";
  }, [checked]);

  return (
    <div className="todo-item">
      <div className="todo-item__content">
        <input
          type="checkbox"
          name="text"
          id={props.text}
          className="checkbox"
          onClick={handleCheckboxClick}
        />
        <label ref={labelRef} className="text" htmlFor={props.text}>
          {props.text}
        </label>
      </div>
      {props.toRemoveItem && (
        <span class="material-icons icon-color">delete_outline</span>
      )}
    </div>
  );
};

export default TodoItem;
