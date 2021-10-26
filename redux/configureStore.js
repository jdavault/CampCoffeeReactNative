import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { coffees } from './coffees';
import { coffeeTypes } from './coffeeTypes';
import { learnMore } from './learnMore';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      coffees,
      coffeeTypes,
      learnMore
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
}