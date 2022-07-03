import shortId from 'shortid';
import { createAction } from '@reduxjs/toolkit';
import types from './todos-types';

/* const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
}); */

//Prepared callback
/* const addTodo = createAction(types.ADD, text => {
  return {
    payload: {
      id: shortId.generate(),
      text,
      completed: false,
    },
  };
}); */

/* createAction returns the function, not the object */
const addTodo = createAction(types.ADD, text => ({
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
}));

console.log('addTodo =>', addTodo('addTodo'));

/* const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});
 */
const deleteTodo = createAction(types.DELETE);
const changeFilter = createAction(types.CHANGE_FILTER);

export default { addTodo, deleteTodo, changeFilter };
