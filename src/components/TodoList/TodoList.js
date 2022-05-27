import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

const TodoList = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
}) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      ></li>
    ))}
  </ul>
);

export default TodoList;
