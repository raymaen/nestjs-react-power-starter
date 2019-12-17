import { SET_ERROR } from './error.types';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
}
