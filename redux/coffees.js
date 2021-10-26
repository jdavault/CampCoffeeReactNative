import * as ActionTypes from './ActionTypes';

export const coffees = (state = {
  isLoading: true,
  errMess: null,
  coffees: []
}, action) => {
  //console.log("INSIDE COFFEES(IC)", action.type)
  switch (action.type) {
    case ActionTypes.ADD_COFFEES:
      //console.log("IC-ADD", action.type)
      return { ...state, isLoading: false, errMess: null, coffees: action.payload };

    case ActionTypes.COFFEES_LOADING:
      //console.log("IC-LOADIG", action.type)
      return { ...state, isLoading: true, errMess: null, coffees: [] }

    case ActionTypes.COFFEES_FAILED:
      //console.log("IC-FAILED", action.type)
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      //console.log("IC-DEFAULT", action.type)
      return state;
  }
};