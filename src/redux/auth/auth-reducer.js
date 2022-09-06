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

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  /* [authActions.logoutSuccess]: (state, payload) => initialUserState => */
/*   [authActions.logoutSuccess]: (_, __) => initialUserState */
[authActions.logoutSuccess]: () => initialUserState,
[authActions.getCurrentUserSuccess]: (_, { payload }) => payload
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
/*   [authActions.logoutSuccess]: (state, { payload }) => null */
[authActions.logoutSuccess]: ( ) => null
});

//payload here is a error.message
/* const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload
}) */

const setError = (_, {payload}) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
  [authActions.logoutError]: setError,
  [authActions.getCurrentUserError]: setError
})

export default combineReducers({
  user,
  token,
  error,
});