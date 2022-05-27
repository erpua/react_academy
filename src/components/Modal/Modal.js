import React, { Component } from 'react';
import { createPortal } from 'react-dom';

//STYLES
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal ComponentWillUnmount');

    window.removeEventListener(
      'keydown',
      this.handleKeyDown,
    );
  }

  handleKeyDown = e => {
    console.log('e.code ========>', e.code);

    if (e.code === 'Escape') {
      console.log('You have pressed ESC, must close Modal');

      this.props.onClose();
    }
  };

  handleBackdropCick = e => {
    /*   console.log('Clicked Backdrop');

    console.log('e.currentTarget: ', e.currentTarget);
    console.log('e.target: ', e.target); */

    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div
        className="Modal__backdrop"
        onClick={this.handleBackdropCick}
      >
        <div className="Modal__content">
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}
