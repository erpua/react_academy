import React, { Component } from 'react';

//STYLES
import './Modal.scss';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modalo componentDidMount from');
  }

  componentWillUnmount() {
    console.log('Modal ComponentWillUnmount');
  }

  render() {
    return (
      <div className="Modal__backdrop">
        <div className="Modal__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
