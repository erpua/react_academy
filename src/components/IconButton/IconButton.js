import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.scss';

//...allyProps => spread all props passed from another component
const IconButton = ({
  children,
  onClick,
  ...allyProps
}) => (
  <button
    type="button"
    className="IconButton"
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

//aria-label is attribute of access.
//in this case button does not have it's own content,
//we pass content from another component => aria-label helps with accessability
//for buttons and icons is MUST HAVE

export default IconButton;
