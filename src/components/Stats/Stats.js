import React from 'react';
import { connect } from 'react-redux';
import './Stats.scss';

const Stats = ({ total, completed }) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">Total</span>
    </p>
    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Done</span>
    </p>
  </div>
);

/* const totalTodoCount = todos.length;
const completedTodoCount = this.calculateCompletedTodos(); */

/* calculateCompletedTodos = () => {
  const { todos } = this.state;

  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
}; */

/* const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: state.todos.items.reduce(
    (total, todo) => (todo.completed ? total + 1 : total),
    0,
  ),
});
 */

////////////////////////

const getCompletedTodosItems = todos =>
  todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

const mapStateToProps = state => ({
  total: state.todos.items.length,
  completed: getCompletedTodosItems(state.todos.items),
});

export default connect(mapStateToProps)(Stats);
