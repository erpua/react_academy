import React from 'react';

const Todo = () => {
  return (
    <div>
      {' '}
      <input
        type="checkbox"
        className="TodoList__checkbox"
        checked={completed}
        onChange={() => onToggleCompleted(id)}
      />
      <p className="TodoList__text">{text}</p>
      <button
        type="button"
        className="TodoList__btn"
        onClick={() => onDeleteTodo(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
