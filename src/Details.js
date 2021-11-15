import React from 'react';

const Details = (props) => {
  const { coin } = props
  console.log(coin)
  return (
    <div>
    {coin}
    </div>
  )
}

export default Details;
