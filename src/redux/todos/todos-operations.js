import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
} from './todos-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const addTodo = text => dispatch => {
  const todo = {
    text,
    completed: false,
  };

  //for start
  /*  dispatch({ type: 'todos/addTodoRequest' }); */
  dispatch(addTodoRequest());

  axios
    .post('/todos', todo)
    .then(({ data }) => dispatch(addTodoSuccess(data)))
    .catch(error => dispatch(addTodoError(error)));
};

const deleteTodo = todoId => dispatch => {
  dispatch(deleteTodoRequest());

  axios
    .delete(`/todos/${todoId}`)
    .then(() => dispatch(deleteTodoSuccess(todoId)))
    .catch(error => dispatch(deleteTodoError(error)));
};
//esport of addTodo not as function, but as operation
export default { addTodo, deleteTodo };
