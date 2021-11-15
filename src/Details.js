import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const { coin } = props;
  return (
    <div>
      {coin}
    </div>
  );
};

Details.propTypes = {
  coin: PropTypes.string.isRequired,
};

export default Details;
