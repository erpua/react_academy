import { combineReducers } from 'redux';
import types from './todos-types';

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

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    /*  case types.DELETE:
      return state.filter(todo => todo.id !== payload); */

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

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
