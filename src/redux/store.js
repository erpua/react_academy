/* here => ONLY SYNC code, NO HTTP requests etc.... */
/* import { createStore, applyMiddleware } from 'redux'; */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  counter: {
    value: 10,
    step: 15,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value + payload,
        },
      };

    case 'counter/Decrement':
      return {
        ...state,
        counter: {
          ...state.counter,
          value: state.counter.value - payload,
        },
      };

    default:
      return state;
  }
};

/* const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleWare)),
);
 */

/* const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware([])),
); */

/* const store = createStore(reducer, composeWithDevTools()); */

/* const store = createStore(reducer, composeWithDevTools(applyMiddleware([]))); */

const store = createStore(reducer);

export default store;
