import React from 'react';
import './TodoList.css';

const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
