import React from 'react';
import { connect } from 'react-redux';

function CounterButton({ click, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Clicked {click} times
    </button>
  );
}

export default connect()(CounterButton);
