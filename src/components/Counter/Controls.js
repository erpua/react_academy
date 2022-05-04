import React from 'react';

const Controls = ({ onIncrement, onDecrement }) => {
  return (
    <div className="Counter__controls">
      <button type="button" onClick={onIncrement}>
        Icrement for 1
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement for 1
      </button>
    </div>
  );
};

export default Controls;
