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

//STSTES with props

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
      // this.state.value + 1 => state for the moment of registration
      value: this.state.value + 1,
    });
  }; */

  /* state = {
    value: 5,
  }; */

  //PROPS
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: number,
  };

  //STATE
  state = {
    value: this.props.initialValue,
  };

  //LOGIC
  //REACT passes automatically reference for current State(prevState) for function
  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  //every update - REACT creates new Object with updated states of values
  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  //COOMPONENT RENDER
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

