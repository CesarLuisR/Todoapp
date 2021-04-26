import React, { useState, useEffect, useRef, useContext } from "react";
import "../styles/NavBar.css";
import { changeSection } from "../context/actions";
import { TodoContext } from "../context/store";

const NavBar = () => {
  const [focusButton, setFocusButton] = useState("All");
  const addRef = useRef();
  const activeRef = useRef();
  const completedRef = useRef();
  const data = useContext(TodoContext);

  const handleClick = (e) => {
    setFocusButton(e.target.textContent);
    changeSection(data.dispatch, e.target.textContent);
  };

  useEffect(() => {
    let refs = [addRef, activeRef, completedRef];

    for (let ref of refs) {
      if (ref.current.textContent === focusButton)
        ref.current.style.borderBottom = "3px solid #2f80ed";
      else ref.current.style.borderBottom = "none";
    }
  }, [focusButton]);

  return (
    <div className="navbar">
      <button onClick={handleClick} className="nav-link" ref={addRef}>
        All
      </button>
      <button onClick={handleClick} className="nav-link" ref={activeRef}>
        Active
      </button>
      <button onClick={handleClick} className="nav-link" ref={completedRef}>
        Completed
      </button>
    </div>
  );
};

export default NavBar;
