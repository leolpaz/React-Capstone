import React from 'react';
import {
  Link,
} from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import PropTypes from 'prop-types';

const Item = (props) => {
  const {
    name, symbol, price, image,
  } = props;

  if (price === 'Unable to load') {
    return (
      <div className="h-100 d-flex flex-column justify-content-center align-items-end home-item">
        <AiOutlineArrowRight />
        <h3>
          {name}
        </h3>
      </div>
    );
  }
  return (
    <Link key={name + symbol} className="coin" to={`/${symbol}`}>
      <div className="h-100 d-flex flex-column justify-content-center align-items-end home-item">
        <AiOutlineArrowRight />
        <img src={image} alt="" />
        <h3>
          {name}
        </h3>
        <span>
          $
          {price}
        </span>
      </div>
    </Link>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Item;
