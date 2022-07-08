import axios from 'axios';
import {
  addTodoRequest,
  addTodoSuccess,
  addTodoError,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoError,
  toggleCompletedRequest,
  toggleCompletedSuccess,
  toggleCompletedError,
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

const toggleCompleted =
  ({ id, completed }) =>
  dispatch => {
    const update = { completed };

    dispatch(toggleCompletedRequest());
    axios
      .patch(`/todos/${id}`, update)
      .then(({ data }) => dispatch(toggleCompletedSuccess(data)))
      .catch.catch(error => dispatch(toggleCompletedError(error)));
  };

//esport of addTodo not as function, but as operation
export default { addTodo, deleteTodo, toggleCompleted };
