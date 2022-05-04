import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  /*  constructor() {
    super();

    this.state = {
      value: 5,
    };
  } 
  
  Babel transiples to => */

  /*  state = {
    value: 5,
    a: 1,
    b: 2,
  }; */

  /*   currenState = {
    value: 5,
    a: 1,
    b: 2,
  };

  updatedState = {
    value: 10,
  };

  newState =
    { ...currenState, ...updatedState } >
    { a: 1, b: 2, value: 10 }; */

  /*  state = {
    value: 5,
  };
 */
  /*  handleIncrement = event => {
    //REACT does not work that way = this.state.value = 6;
    this.setState({
      value: 10,
    });
  }; */

  /*   state = {
    value: 5,
  }; */

  /* handleIncrement = event => {
    this.setState({
      //bad practice
      // this.state.value + 1 => state for moment of registration
      value: this.state.value + 1,
    });
  }; */

  state = {
    value: 5,
  };

  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {};

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">
          {this.state.value}
        </span>

        <div className="Counter__controls">
          <button
            type="button"
            onClick={this.handleIncrement}
          >
            Icrement for 1
          </button>
          <button
            type="button"
            onClick={this.handleDecrement}
          >
            Decrment for 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
