import React from 'react';

const Controls = ({ step, onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Icrement for step: {step}
      </button>
      <br />
      <br />
      <button type="button" onClick={onDecrement}>
        Decrement for step: {step}
      </button>
    </div>
  );
};

export default Controls;
