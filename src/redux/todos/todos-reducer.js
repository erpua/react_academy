import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

console.log('actions.addTodo.type ===>', actions.addTodo.type);
console.log('actions.deleteTodo.type ===>', actions.deleteTodo.type);

/* [actions.addTodo] => automatically converts toString(); */

const items = createReducer([], {
  /* state is [] => value of items */
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.toggleCompleted]: (state, action) =>
    state.map(todo =>
      todo.id === action.payload
        ? { ...todo, completed: !todo.completed }
        : todo,
    ),
});

/* const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'todos/changeFilter':
      return payload;

    default:
      return state;
  }
}; */

/* const filter = createReducer('', {
  [actions.changeFilter]: (state, action) => action.payload,
});
 */
/* 
const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
}); */

/* underline instead of variable name => this variable is not being used */
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
