import { createSelector } from '@reduxjs/toolkit';
//createSelector => for selector memorizing

//simple selectors
const getLoading = state => state.todos.loading;

const getFilter = state => state.todos.filter;

const getAllTodos = state => state.todos.items;

const getTotalTodoCount = state => {
  const todos = getAllTodos(state);

  return todos.length;
};

//combined selectors
const getCompletedTodoCount = createSelector([getAllTodos], todos => {
  console.log('Calculating new amount of completed todo');
  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
});

//memoizied selectors
const getVisibleTodos = createSelector(
  //First argument- needed selectors Array
  [getAllTodos, getFilter],
  //Second argument - function for calculation
  (todos, filter) => {
    console.log('Creating new Array of visible todos');
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

/* const getCompletedTodosCount = state => {
  const todos = getAllTodos(state);

  return todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);
}; */

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
