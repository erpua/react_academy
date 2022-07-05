import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Todo from '../Todo';
import todosActions from '../../redux/todos/todos-actions';
import './TodoList.scss';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        key={id}
        className={classNames('TodoList__item', {
          'TodoList__item--completed': completed,
        })}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDelete={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

const getVisibleTodos = (allTodos, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allTodos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};

/* const mapStateToProps = state => {
  const { filter, items } = state.todos;
  const visibleTodos = getVisibleTodos(items, filter);

  return {
    todos: visibleTodos,
  };
}; */

/* const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.items, state.todos.filter),
});
 */

const mapStateToProps = ({ todos: { items, filter } }) => ({
  todos: getVisibleTodos(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(todosActions.deleteTodo(id)),
  onToggleCompleted: id => dispatch(todosActions.toggleCompleted(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
