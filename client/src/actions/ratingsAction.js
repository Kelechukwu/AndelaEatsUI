import axios from 'axios';

import { FETCH_BOOKED_RATINGS, FETCH_RATING_LOADING, FETCH_RATINGS_SUCCESS, FETCH_RATINGS_FAILURE } from './actionTypes';
import { config } from '../config';

export const base = `${config.API_BASE_URL}/ratings`;


export const setRatingsLoading = (isLoading) => {
  type: FETCH_RATING_LOADING,
  isLoading
};

export const fetchBookedRatings = () => dispatch => {
  dispatch(setRatingsLoading(true));
  return axios.get(`${base}`)
    .then((response) => {
      dispatch({
        type: FETCH_BOOKED_RATINGS,
        payload: response.data
      });
      dispatch(setRatingsLoading(false));
    }).catch((error) => {
      dispatch({
        type: FETCH_RATINGS_FAILURE,
        error
      });
      dispatch(setRatingsLoading(false));
    });
};
