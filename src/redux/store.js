/* here => ONLY SYNC code, NO HTTP requests etc.... */
import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import todosReducer from './todos/todos-reducer';

const persistConfig = {
  key: 'hello',
  storage,
};

/* const store = createStore(rootReducer, composeWithDevTools()); */

/* const store = configureStore({
  reducer: rootReducer,
  devTools: false,
}); */

console.log('process.env.NODE_ENV =>', process.env.NODE_ENV);

console.log('getDefaultMiddleware()', getDefaultMiddleware());

const middleware = [...getDefaultMiddleware(), logger];

const rootReducer = combineReducers({
  todos: todosReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
// devTools setup for deveolopment only
//automatic creation of combine reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
