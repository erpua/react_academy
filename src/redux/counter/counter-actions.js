import acionTypes from './counter-types';

export const increment = value => ({
  type: acionTypes.INCREMENT,
  payload: value,
});

export const decrement = value => ({
  type: acionTypes.DECREMENT,
  payload: value,
});
