/* here => ONLY SYNC code, NO HTTP requests etc.... */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import todosReducer from './todos/todos-reducer';

/* const myMiddleware = (store = next => action => {
  //wqerthedf
});

function myMiddleware(store) {
  return function(next) {
    return function (action) {

    };
  };
}
 */

const myMiddleware = store => next => action => {
  console.log('myMiddleware; action', action);

  next(action);
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
  myMiddleware,
];

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

/* const persistor = persistStore(store); */

export default store;
