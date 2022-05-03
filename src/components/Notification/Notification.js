import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notifiacation.module.css';

/* const Notification = ({ text }) => {
  return <p className={styles.success}>{text}</p>;
};
 */

/* const Notification = ({ text, type = 'success' }) => {
  return <p className={styles[type]}>{text}</p>;
}; */

const Notification = ({ text, type }) => {
  return <p className={styles[type]}>{text}</p>;
};

Notification.defaultProps = {
  type: 'success',
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']),
};

export default Notification;
