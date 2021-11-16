import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import coinsReducer from './coins/coin';

const reducer = combineReducers({
  coinsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
