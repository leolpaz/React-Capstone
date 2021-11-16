import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import {
  Link,
} from 'react-router-dom';
import { fetchData } from './redux/coins/coin';

const Home = (props) => {
  const { list } = props;
  const coinList = useSelector((state) => state.coinsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coinList.length === 0) {
      list.forEach((coin, index) => {
        setTimeout(() => { dispatch(fetchData(coin.name, coin.image)); }, 500 * index);
      });
    }
  }, []);
  return (
    <div className="grid home-cont">
      {coinList.map((el) => (
        <Link key={el.name + el.symbol} className="coin" to={`/${el.symbol}`}>
          <div className="h-100 d-flex flex-column justify-content-center align-items-end home-item">
            <AiOutlineArrowRight />
            <img src={el.image} alt="" />
            <h3>
              {el.name}
            </h3>
            <span>
              $
              {el.price}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
