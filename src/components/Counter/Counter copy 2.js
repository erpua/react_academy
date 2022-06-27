import React from 'react';
import { connect } from 'react-redux';
/* import Controls from './Controls';
import Value from './Value'; */
import './Counter.css';

function Counter() {
  return (
    <div className="Counter">
      {/* <Value value={value} />
      <Controls
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      /> */}
      Counter
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
};
 */

/* const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
}); */

export default connect(mapStateToProps)(Counter);

/* mapStateToProps => map of Redux state to component props */

/* const a = (x) => (y) => x+y; */
/* a(2)(3); return 5; */

/* const a = x => {
  return y => {
    return x + y;
  }
} 
 a(2)(3); return 5; */
