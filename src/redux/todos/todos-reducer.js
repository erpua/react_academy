import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

console.log('actions.addTodo.type ===>', actions.addTodo.type);

const items = createReducer([], {
  'todos/add': (state, { payload }) => [...state, payload],
  'todos/delete': (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'todos/changeFilter':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
