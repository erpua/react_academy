import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({onClose, children}) {

  useEffect(()=> {
    //didMount
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    //willUnmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);

  const handleBackdropCick = e => {
    
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  return createPortal(
    <div
      className="Modal__backdrop"
      onClick={handleBackdropCick}
    >
      <div className="Modal__content">{children}</div>
    </div>,
      modalRoot,
    );

};