/* here => ONLY SYNC code, NO HTTP requests etc.... */
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todos-reducer';

/* const store = createStore(rootReducer, composeWithDevTools()); */

/* const store = configureStore({
  reducer: rootReducer,
  devTools: false,
}); */

console.log('process.env.NODE_ENV =>', process.env.NODE_ENV);

// devTools setup for deveolopment only
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
