import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './todos-types';

const items = createReducer([], {
  /* [types.ADD] => 'todos/add': */
  /* 'todos/add': (state = [], action) => state => [...state, action.payload); */
  /*  'todos/add': (state, action) => [...state, action.payload],
      'todos/delete': (state, action) => state.filter(({ id }) => id !== action.payload); */

  /* Default case is being written automatically */
  'todos/add': (state, { payload }) => [...state, payload],
  'todos/delete': (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const items = createReducer([], {
  [types.ADD]: (state, { payload }) => [...state, payload],
  [types.DELETE]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

/* {
  counter: {},
  todos: {
    items: [],
    filter: '',
  }
} */

/* const items = (state = [], action) => {
  return state;
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
}); */

/*  case types.DELETE:
      return state.filter(todo => todo.id !== payload); */

/* const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

  

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
}; */

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});


//////////////

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import types from './todos-types';

const items = createReducer([], {
  [types.ADD]: (state, { payload }) => [...state, payload],
  [types.DELETE]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
