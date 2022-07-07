import shortId from 'shortid';
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

/* axios.defaults.baseURL = 'http://localhost:4040';

const addTodoRequest = createAction('todos/addTodoRequest');
const addTodoSuccess = createAction('todos/addTodoSuccess');
const addTodoError = createAction('todos/addTodoError');

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

const toggleCompleted = createAction('todo/toggleCompleted');

export default {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodo,
  changeFilter,
  toggleCompleted,
}; */

axios.defaults.baseURL = 'http://localhost:4040';

export const addTodoRequest = createAction('todos/addTodoRequest');
export const addTodoSuccess = createAction('todos/addTodoSuccess');
export const addTodoError = createAction('todos/addTodoError');

export const deleteTodo = createAction('todos/delete');

export const changeFilter = createAction('todos/changeFilter');

export const toggleCompleted = createAction('todo/toggleCompleted');
