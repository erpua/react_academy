/* import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {} );

const token = createReducer(null, {} );

const error = createReducer(null, {} );

export default combineReducers({
  user,
  token,
  error,
});
 */

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';
import authOperations from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
});

//payload here is a error.message
const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
})

export default combineReducers({
  user,
  token,
  error,
});