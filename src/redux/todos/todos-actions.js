import shortId from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
}));

console.log('addTodo =>', addTodo('addTodo'));

const deleteTodo = createAction('todos/delete');
const changeFilter = createAction('todos/changeFilter');

export default { addTodo, deleteTodo, changeFilter };
