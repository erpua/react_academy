import React from 'react';
import PropTypes from 'prop-types';

/* const Panel = ({ title, children }) => (
  <div
    style={{
      width: 200,
      border: '1px solid red',
    }}
  >
    {title && <h2>{title}</h2>}

    {children}
  </div>
); */

const styles = {
  container: {
    width: 200,
    border: '1px solid red',
  },
};

const Panel = ({ title, children }) => (
  <div style={styles.container}>
    {title && <h2>{title}</h2>}

    {children}
  </div>
);

Panel.defaultProps = {
  title: '',
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
