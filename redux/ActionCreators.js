import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchCoffees = () => dispatch => {
  dispatch(coffeesLoading());

  return fetch(baseUrl + 'discoverCoffeeData')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      })
    .then(response => response.json())
    .then(coffees => dispatch(addCoffees(coffees)))
    .catch(error => dispatch(coffeesFailed(error.message)));
};

export const coffeesLoading = () => ({
  type: ActionTypes.COFFEES_LOADING
});

export const coffeesFailed = errMess => ({
  type: ActionTypes.COFFEES_FAILED,
  payload: errMess
});

export const addCoffees = coffees => ({
  type: ActionTypes.ADD_COFFEES,
  payload: coffees
});

export const fetchCoffeeTypes = () => dispatch => {
  dispatch(coffeeTypesLoading());

  return fetch(baseUrl + 'CoffeeTypes')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      })
    .then(response => response.json())
    .then(coffeeTypes => dispatch(addCoffeeTypes(coffeeTypes)))
    .catch(error => dispatch(coffeeTypesFailed(error.message)));
};

export const coffeeTypesLoading = () => ({
  type: ActionTypes.COFFEE_TYPES_LOADING
});

export const coffeeTypesFailed = errMess => ({
  type: ActionTypes.COFFEE_TYPES_FAILED,
  payload: errMess
});

export const addCoffeeTypes = coffeeTypes => ({
  type: ActionTypes.ADD_COFFEE_TYPES,
  payload: coffeeTypes
});

export const fetchLearnMore = () => dispatch => {

  dispatch(learnMoreLoading());

  return fetch(baseUrl + 'learnMoreData')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        throw error;
      }
    },
      error => {
        const errMess = new Error(error.message);
        throw errMess;
      })
    .then(response => response.json())
    .then(pearnMore => dispatch(addLearnMore(pearnMore)))
    .catch(error => dispatch(learnMoreFailed(error.message)));
};

export const learnMoreLoading = () => ({
  type: ActionTypes.LEARN_MORE_LOADING
});

export const learnMoreFailed = errMess => ({
  type: ActionTypes.LEARN_MORE_FAILED,
  payload: errMess
});

export const addLearnMore = learnMore => ({
  type: ActionTypes.ADD_LEARN_MORE,
  payload: learnMore
});
