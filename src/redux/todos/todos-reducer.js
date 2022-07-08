import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
/* import * as actions from './todos-actions';
 */

/*
export default {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodo,
  changeFilter,
  toggleCompleted,
}; from todos-actions

const { addTodoRequest, addTodoSuccess, addTodoError } = actions; */

import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  changeFilter,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
} from './todos-actions';

/* state is [] => value of items */
/* const items = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo,
    ),
}); */

const items = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [deleteTodoSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [toggleCompletedSuccess]: (state, { payload }) =>
    state.map(todo => (todo.id === payload.id ? payload : todo)),
});

/* underline ( _ ) instead of variable name > this variable is not being used */
const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading =
  (false,
  {
    [addTodoRequest]: () => true,
    [addTodoSuccess]: () => false,
    [addTodoError]: () => false,
    [deleteTodoRequest]: () => true,
    [deleteTodoSuccess]: () => false,
    [deleteTodoError]: () => false,
    [toggleCompletedRequest]: () => true,
    [toggleCompletedSuccess]: () => false,
    [toggleCompletedError]: () => false,
  });

export default combineReducers({
  items,
  filter,
  loading,
});
