import * as ActionTypes from './ActionTypes';

export const learnMore = (state = {
  isLoading: true,
  errMess: null,
  learnMore: []
}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_LEARN_MORE:
      return { ...state, isLoading: false, errMess: null, learnMore: action.payload };

    case ActionTypes.LEARN_MORE_LOADING:
      return { ...state, isLoading: true, errMess: null, learnMore: [] }

    case ActionTypes.LEARN_MORE_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};