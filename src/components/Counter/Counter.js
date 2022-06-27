import React from 'react';
import { connect } from 'react-redux';
import Controls from './Controls';
import Value from './Value';
/* * as actions => takes everthing as actions */
import * as actions from '../../redux/actions';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

/* state (from the whole App ) is being received automatically */
/* const mapStateToProps = state => {
  return {
    a: 5,
    b: 10,
    c: 15,
  };
}; */

/* mapStateToProps => map of Redux state to component props */
/* mapStateToProps / mapDispatchToProp calls every time when state is being changed */

/* const mapStateToProps = state => {
  return {
    value: state.counterValue,
  };
}; */

/* const mapStateToProps = state => {
  return {
    value: state.counter.value,
    step: state.counter.step,
  };
};
 */

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

/* mapDispatchToProp */

/* const mapDispatchToProp = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment(5)),
    onDecrement: () => dispatch(actions.decrement(5)),
  };
}; */

/* const mapDispatchToProp = dispatch => {
  return {
    onIncrement: value => dispatch(actions.increment(value)),
    onDecrement: value => dispatch(actions.decrement(value)),
  };
}; */

const mapDispatchToProp = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

/* export default connect(getState, dispatch)(Counter); */

export default connect(mapStateToProps, mapDispatchToProp)(Counter);

/* const a = (x) => (y) => x+y; */
/* a(2)(3); return 5; */

/* const a = x => {
  return y => {
    return x + y;
  }
} 
 a(2)(3); return 5; */
