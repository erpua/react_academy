/* here => ONLY SYNC code, NO HTTP requests etc.... */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import todosReducer from './todos/todos-reducer';

/* const store = createStore(rootReducer, composeWithDevTools()); */

/* const store = configureStore({
  reducer: rootReducer,
  devTools: false,
}); */

console.log('process.env.NODE_ENV =>', process.env.NODE_ENV);

console.log('getDefaultMiddleware()', getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

// devTools setup for deveolopment only
//automatic creation of combine reducer
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
