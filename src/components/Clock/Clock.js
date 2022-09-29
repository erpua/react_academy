import React, { Component } from 'react';
import './Clock.scss';

export default class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intevalId = null;

  componentDidMount() {
    console.log('setInterval');

    /*  this.intevalId = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000,
    ); */
    this.intevalId = setInterval(
      () =>
        this.setState({
          time: new Date().toLocaleTimeString(),
        }),
      1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.intevalId);
  }

  render() {
    return (
      <div className="Clock__face">{this.state.time}</div>
    );
  }
}
