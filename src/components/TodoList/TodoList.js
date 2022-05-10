import React from 'react';
import './TodoList.css';

/*

unstable practice

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }, index) => (
      <li key={index} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
); */

const TodoList = ({ todos, onDeleteTodo }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li key={id} className="TodoList__item">
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
