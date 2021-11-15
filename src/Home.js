import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Home = (props) => {
  const { list } = props
  return (
    <>
    {list.map(el => {
     return (
       <h2>
        <Link key={el.name} to={`/${el.name}`}>{el.name}</Link>
       </h2>
      )
    })}
  </>
  )
}

export default Home;
