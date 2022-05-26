import React, { Component } from 'react';
import { createPortal } from 'react-dom';

//STYLES
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', e => {
      console.log('e.code ========>', e.code);

      if (e.code === 'Escape') {
        console.log(
          'You have pressed ESC, must close Modal',
        );

        this.props.onClose();
      }
    });
  }

  /*  componentWillUnmount() {
    console.log('Modal ComponentWillUnmount');
  } */

  render() {
    return createPortal(
      <div className="Modal__backdrop">
        <div className="Modal__content">
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    );
  }
}
