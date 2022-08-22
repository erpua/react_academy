import { createSelector } from '@reduxjs/toolkit';
//createSelector => for selector memorizing

const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

/* const getCompletedTodosCount = state => {
  const todos = getAllTodos(state);

  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
}; */

const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

/*
kompozitniy selector

const getVisibleTodos = state => {
  const todos = getAllTodos(state);
  const filter = getFilter(state);

  const normalizedFilter = filter.toLowerCase();

  return todos.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter),
  );
};
 */
const getVisibleTodos = createSelector(
  //First argument- needed selectors Array
  [getAllTodos, getFilter],
  //Second argument - function for calculation
  (todos, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(({ text }) =>
      text.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getTotalTodoCount,
  getVisibleTodos,
  getCompletedTodoCount,
};
