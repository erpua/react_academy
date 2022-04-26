import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
  <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Author: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Price: {price} credits</p>
    <p>Accesebility: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
    <button type="button">Add to cart</button>
  </div>
);

Painting.defaultProps = {
  url: defaultImage,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
