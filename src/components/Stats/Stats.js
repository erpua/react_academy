import React from 'react';
import './Stats.scss';

const Stats = ({ total, completed }) => (
  <div className="Stats">
    <p className="Stats__item">
      <span className="Stats__value">{total}</span>
      <span className="Stats__label">Total</span>
    </p>
    <p className="Stats__item">
      <span className="Stats__value">{completed}</span>
      <span className="Stats__label">Done</span>
    </p>
  </div>
);

export default Stats;
