/* here => ONLY SYNC code, NO HTTP requests est.... */
import { createStore } from 'redux';

const initialState = { counterValue: 0 };

/* const reducer = (state = initialState, action) => {

  console.log('action from store.js in reducer =>', action);

   
  switch (action.type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + 1,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - 1,
      };

    default:
      return state;
  } 

  switch (action.type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + action.payload,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - action.payload,
      };

    default:
      return state;
  }
}; */

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + payload,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
