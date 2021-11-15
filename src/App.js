import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

// Components

import Home from './Home';
import Details from './Details';
import Nav from './Nav';

const App = () => {
  const coinList = [
    {
      name: 'BTC',
    },
    {
      name: 'ETH',
    },
    {
      name: 'BNB',
    },
    {
      name: 'USDT',
    },
    {
      name: 'ADA',
    },
    {
      name: 'XRP',
    },
    {
      name: 'DOT',
    },
    {
      name: 'DOGE',
    },
    {
      name: 'USDC',
    },
    {
      name: 'LUNA',
    },
  ];

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home list={coinList} />} />
          {coinList.map((el) => <Route key={el.name + 1} path={`/${el.name}`} element={<Details coin={el.name} />} />)}
        </Routes>
      </Router>
    </>
  );
};

export default App;
