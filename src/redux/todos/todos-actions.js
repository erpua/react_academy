import shortId from 'shortid';
import types from './todos-types';

const addTodo = text => ({
  type: types.ADD,
  payload: {
    id: shortId.generate(),
    text,
    completed: false,
  },
});

const deleteTodo = todoId => ({
  type: types.DELETE,
  payload: todoId,
});

const filter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addTodo, deleteTodo, filter };
