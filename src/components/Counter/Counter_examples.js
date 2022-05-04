import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  //arrow function automatically binds this with class
  //event here is a SynthetiEvent Object
  handleIncrement = event => {
    console.log('Incremented for 1');
    console.log('this =>', this); // undefined
    console.log(
      'event.target from method =>',
      event.target,
    );
    console.log('event.type =>', event.type);

    /* setTimeout(() => {
      console.log(
        'event.target from inner setTimeout =>',
        event.target,
      );
    }, 1000); */

    /*  const target = event.target; */

    const { target } = event;

    setTimeout(() => {
      console.log(
        'event.target from inner setTimeout =>',
        target,
      );
    }, 1000);
  };

  handleDecrement = () => {
    console.log('Decremented for 1');
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>

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

/* render() {
    return (
      <div className="Counter">
        <span className="Counter__value">0</span>

        <div className="Counter__controls">
          <button
            type="button"
            onClick={this.handleIncrement}
          >
            Icrement for 1
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('Decremented for 1');
            }}
          >
            Decrment for 1
          </button>
        </div>
      </div>
    );
  }
} */

export default Counter;
