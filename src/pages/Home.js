import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Item from '../components/Item';
import { fetchData, filterList } from '../redux/coins/coin';

const Home = (props) => {
  const { list } = props;
  const baseList = useSelector((state) => state.coinsReducer.initialList);
  const coinList = useSelector((state) => state.coinsReducer.filteredList);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coinList.length === 0) {
      list.forEach((coin, index) => {
        setTimeout(() => { dispatch(fetchData(coin.name, coin.image)); }, 500 * index);
      });
    }
  }, []);

  const filterItems = (e) => {
    const displayList = baseList.filter((el) => {
      const toFilter = el.name.toLowerCase();
      const regex = new RegExp(e.target.value);
      if (toFilter.match(regex) !== null) {
        return true;
      }
      return false;
    });
    dispatch(filterList(displayList));
  };
  return (
    <div className="home-cont">
      <input onChange={filterItems} className="w-100 input" type="text" name="" id="" placeholder="Type here to filter" />
      <div className="grid">
        {coinList.map((el) => (
          <Item
            key={el.name + el.price}
            name={el.name}
            price={el.price}
            symbol={el.symbol}
            image={el.image}
          />
        ))}
      </div>
    </div>
  );
};

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
