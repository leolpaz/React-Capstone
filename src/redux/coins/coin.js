import axios from 'axios';

const GET_COINS = 'cryptowatcher/coin/GET-COINS';
const API_URL = 'https://coinlib.io/api/v1';
const END_POINT = '/coin?key=4cc278a547aafd46&symbol=';

const initialState = [];

export const fetchData = (ticker, image) => async (dispatch) => {
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  let error = false;
  const response = await axios.get(API_URL + END_POINT + ticker).catch(() => { error = true; });
  if (error === true) {
    const payload = {
      name: 'Unable to load try refreshing the page',
      price: 'Unable to load try',
      hTwentyFour: 'Unable to load try',
      lTwentyFour: 'Unable to load try',
      dTwentyFour: 'Unable to load try',
      image,
      symbol: 'Unable to load',
    };
    dispatch({
      type: GET_COINS,
      payload,
    });
  } else {
    const { data } = response;
    const payload = {
      name: data.name,
      symbol: data.symbol,
      price: (Math.round((data.price * 100)) / 100).toString(),
      hTwentyFour: (Math.round((data.high_24h * 100)) / 100).toString(),
      lTwentyFour: (Math.round((data.low_24h * 100)) / 100).toString(),
      dTwentyFour: (Math.round((data.delta_24h * 100)) / 100).toString(),
      image,
    };
    dispatch({
      type: GET_COINS,
      payload,
    });
  }
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COINS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default coinsReducer;
