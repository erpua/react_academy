/* here => ONLY SYNC code, NO HTTP requests etc.... */
import { createStore } from 'redux';

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

const store = createStore(reducer);

export default store;
