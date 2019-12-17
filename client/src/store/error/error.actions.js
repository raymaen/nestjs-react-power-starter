import { SET_ERROR } from './error.types';

export const setError = error => ({
  type: SET_ERROR,
  payload: error
});
