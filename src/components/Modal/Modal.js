import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({children}) {
  /* componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown, { once: true });
  }; */

  useEffect(()=> {
    window.addEventListener('keydown', this.handleKeyDown, { once: true });
  }, []);

  /* componentWillUnmount() {
    console.log('Modal ComponentWillUnmount');

    window.removeEventListener(
      'keydown',
      this.handleKeyDown,
    );
  }; */

  const handleKeyDown = e => {
    console.log('e.code ========>', e.code);

    if (e.code === 'Escape') {
      console.log('You have pressed ESC, must close Modal');

      this.props.onClose();
    }
  };

  const handleBackdropCick = e => {
    /*   console.log('Clicked Backdrop');

    console.log('e.currentTarget: ', e.currentTarget);
    console.log('e.target: ', e.target); */

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


// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';

// /* STYLES */
// import './Modal.scss';

// const modalRoot = document.querySelector('#modal-root');

// export default class Modal extends Component {
//   /*  componentDidMount() {
//     console.log('Modal componentDidMount');

//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   */

//   componentDidMount() {
//     console.log('Modal componentDidMount');
//     window.addEventListener('keydown', this.handleKeyDown, { once: true });
//   };

//   /* componentWillUnmount() {
//     console.log('Modal ComponentWillUnmount');

//     window.removeEventListener(
//       'keydown',
//       this.handleKeyDown,
//     );
//   } */

//   handleKeyDown = e => {
//     console.log('e.code ========>', e.code);

//     if (e.code === 'Escape') {
//       console.log('You have pressed ESC, must close Modal');

//       this.props.onClose();
//     }
//   };

//   handleBackdropCick = e => {
//     /*   console.log('Clicked Backdrop');

//     console.log('e.currentTarget: ', e.currentTarget);
//     console.log('e.target: ', e.target); */

//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div
//         className="Modal__backdrop"
//         onClick={this.handleBackdropCick}
//       >
//         <div className="Modal__content">
//           {this.props.children}
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// };
