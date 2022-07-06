import shortId from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const asyncActionCreator = args => dispatch => {};

const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
}));

/* console.log('addTodo =>', addTodo('addTodo')); */

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

const toggleCompleted = createAction('todo/toggleCompleted');

export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
