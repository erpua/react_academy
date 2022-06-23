import { createStore } from 'redux';

const initialState = { counterValue: 0 };

const reducer = (state = initialState, action) => {
  /* console.log('action from store.js in reducer =>', action); */

  return state;
};

const store = createStore(reducer);

export default store;
