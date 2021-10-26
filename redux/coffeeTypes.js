import * as ActionTypes from './ActionTypes';

export const coffeeTypes = (state = {
  isLoading: true,
  errMess: null,
  coffeeTypes: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TYPES:
      return { ...state, isLoading: false, errMess: null, coffeeTypes: action.payload };

    case ActionTypes.COFFEE_TYPES_LOADING:
      return { ...state, isLoading: true, errMess: null, coffeeTypes: [] }

    case ActionTypes.COFFEE_TYPES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};