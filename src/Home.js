import PropTypes from 'prop-types';
import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Home = (props) => {
  const { list } = props;
  return (
    <>
      {list.map((el) => (
        <h2 key={el.name}>
          <Link to={`/${el.name}`}>{el.name}</Link>
        </h2>
      ))}
    </>
  );
};

Home.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
