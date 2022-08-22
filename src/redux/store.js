/* here => ONLY SYNC code, NO HTTP requests etc.... */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
/* import logger from 'redux-logger'; */
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { todosReducer } from './todos';
import counterReducer from './counter';

/* const myMiddleware = store => next => action => {
  console.log('myMiddleware; action', action);

  next(action);
}; */

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  /*  logger, */
  /* myMiddleware, */
];

const store = configureStore({
  reducer: {
    todos: todosReducer,
    counter: counterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
