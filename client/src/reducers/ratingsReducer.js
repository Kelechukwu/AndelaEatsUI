import { FETCH_RATING_LOADING, FETCH_BOOKED_RATINGS, FETCH_RATINGS_FAILURE } from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RATING_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case FETCH_BOOKED_RATINGS:
      return {
        ...state,
        ratings: action.payload
      };
    case FETCH_RATINGS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
