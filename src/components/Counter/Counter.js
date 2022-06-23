import React, { Component } from 'react';
import { number } from 'prop-types';

import Controls from './Controls';
import Value from './Value';

import './Counter.css';

class Counter extends Component {
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
  /*  handleIncrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  }; */

  handleIncrement = () => {
    this.setState(({ value }) => {
      return {
        value: value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(({ value }) => {
      return {
        value: value - 1,
      };
    });
  };

  //MARKUP
  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
