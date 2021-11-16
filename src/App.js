import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import btcLogo from './assets/Cjdowner-Cryptocurrency-Bitcoin.svg';
import bnbLogo from './assets/Cjdowner-Cryptocurrency-Binance-Coin.svg';
import ethLogo from './assets/Cjdowner-Cryptocurrency-Ethereum.svg';
import usdtLogo from './assets/Cjdowner-Cryptocurrency-Tether.svg';
import adaLogo from './assets/Cjdowner-Cryptocurrency-Cardano.svg';
import xrpLogo from './assets/Cjdowner-Cryptocurrency-Flat-Ripple-XRP.svg';
import linkLogo from './assets/Cjdowner-Cryptocurrency-ChainLink.svg';
import dogeLogo from './assets/Cjdowner-Cryptocurrency-Dogecoin.svg';
import xlmLogo from './assets/Cjdowner-Cryptocurrency-Stellar.svg';
import ltcLogo from './assets/Cjdowner-Cryptocurrency-Litecoin.svg';

// Components

import Home from './Home';
import Details from './Details';
import Nav from './Nav';

const App = () => {
  const reduxList = useSelector((state) => state.coinsReducer.initialList);
  const coinList = [
    {
      name: 'BTC',
      image: btcLogo,
    },
    {
      name: 'ETH',
      image: ethLogo,
    },
    {
      name: 'BNB',
      image: bnbLogo,
    },
    {
      name: 'USDT',
      image: usdtLogo,
    },
    {
      name: 'ADA',
      image: adaLogo,
    },
    {
      name: 'XRP',
      image: xrpLogo,
    },
    {
      name: 'LINK',
      image: linkLogo,
    },
    {
      name: 'DOGE',
      image: dogeLogo,
    },
    {
      name: 'XLM',
      image: xlmLogo,
    },
    {
      name: 'LTC',
      image: ltcLogo,
    },
  ];

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home list={coinList} />} />
          {reduxList.map((el) => (
            <Route
              key={el.symbol}
              path={`/${el.symbol}`}
              element={(
                <Details
                  coin={el.name}
                  image={el.image}
                  symbol={el.symbol}
                  price={el.price}
                  hTwentyFour={el.hTwentyFour}
                  lTwentyFour={el.lTwentyFour}
                  dTwentyFour={el.dTwentyFour}
                />
)}
            />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
