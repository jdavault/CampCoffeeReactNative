import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + 'comments')
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
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

export const fetchCoffees = () => dispatch => {
  //console.log("1111", baseUrl + 'discoverCoffeeData')
  dispatch(coffeesLoading());

  return fetch(baseUrl + 'discoverCoffeeData')
    .then(response => {
      if (response.ok) {
        //console.log("OK")
        return response;
      } else {
        const error = new Error(`Error ${response.status}: ${response.statusText}`);
        error.response = response;
        //console.log(error)
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

export const fetchPromotions = () => dispatch => {

  dispatch(promotionsLoading());

  return fetch(baseUrl + 'promotions')
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
    .then(promotions => dispatch(addPromotions(promotions)))
    .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMess
});

export const addPromotions = promotions => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions
});

export const fetchPartners = () => dispatch => {

  dispatch(partnersLoading());

  return fetch(baseUrl + 'partners')
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
    .then(partners => dispatch(addPartners(partners)))
    .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
  type: ActionTypes.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
  type: ActionTypes.PARTNERS_FAILED,
  payload: errMess
});

export const addPartners = partners => ({
  type: ActionTypes.ADD_PARTNERS,
  payload: partners
});