import shortId from 'shortid';
import axios from 'axios';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040';

const addTodo = text => dispatch => {
  const todo = {
    text,
    completed: false,
  };

  //for start
  dispatch({ type: 'todos/addTodoRequest' });

  axios
    .post('/todos', todo)
    .then(({ data }) =>
      dispatch({ type: 'todos/addTodoSuccess', payload: data }),
    )
    .catch(error => dispatch({ type: 'todos/addTodoError', payload: error }));
};

const asyncActionCreator = args => dispatch => {};

/* const addTodo = createAction('todos/add', text => ({
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
})); */

/* console.log('addTodo =>', addTodo('addTodo')); */

const deleteTodo = createAction('todos/delete');

const changeFilter = createAction('todos/changeFilter');

const toggleCompleted = createAction('todo/toggleCompleted');

export default { addTodo, deleteTodo, changeFilter, toggleCompleted };
