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

export default { addTodo };
