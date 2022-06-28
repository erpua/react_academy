/* here => ONLY SYNC code, NO HTTP requests est.... */
import { createStore } from 'redux';

const initialState = {
  counterValue: 100,
};

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

const store = createStore(reducer, composeWithDevTools());

/* const store = createStore(reducer); */

export default store;

/////////////////////////////////////

/* here => ONLY SYNC code, NO HTTP requests etc.... */
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  counter: {
    value: 10,
    step: 15,
  },
};

const counterInitialState = {
  value: 10,
  step: 15,
};

const counterReducer = (state = counterInitialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        ...state,
        value: state.value + payload,
      };

    case 'counter/Decrement':
      return {
        ...state,
        value: state.value - payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

