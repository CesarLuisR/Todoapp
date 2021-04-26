import React from 'react';
import "../styles/TodoList.css"
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <div className="todo-list">
      <TodoItem text="Buenos dias" toRemoveItem />
      <TodoItem text="Bueos dias" toRemoveItem />
      <TodoItem text="Bnos dias" toRemoveItem />
    </div>
  );
}

export default TodoList
