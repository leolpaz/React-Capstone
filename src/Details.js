import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const {
    coin, image, symbol, price, hTwentyFour, lTwentyFour, dTwentyFour,
  } = props;
  return (
    <div className="det-container">
      <div className="d-flex justify-content-between align-items-center det-items">
        <img src={image} alt="" />
        <span>
          <p className="fs-4">{coin}</p>
          <p className="fs-4">{price}</p>
        </span>
      </div>
      <div className="fs-1 det-items d-flex flex-column align-items-center justify-content-center">
        <h3>Symbol:</h3>
        <p className="symbol">{symbol}</p>
      </div>
      <div className="det-items last-sqr d-flex flex-column justify-content-around align-items-center">
        <p className="fs-3">
          24h High:
          $
          {hTwentyFour}
        </p>
        <p className="fs-2">📈</p>
        <p className="fs-3">
          24h Low:
          $
          {lTwentyFour}
        </p>
        <p className="fs-2">📉</p>
        <p className="fs-3">
          24h Delta:
          {' '}
          {dTwentyFour}
        </p>
      </div>
    </div>
  );
};

Details.propTypes = {
  coin: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  hTwentyFour: PropTypes.string.isRequired,
  lTwentyFour: PropTypes.string.isRequired,
  dTwentyFour: PropTypes.string.isRequired,
};

export default Details;
