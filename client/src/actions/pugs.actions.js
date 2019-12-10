import { SET_PUGS } from './types';
import { PugService } from '../service/api';

export const getPugs = () => async dispatch => {
  const pugs = await PugService.getPugs();

  dispatch({
    type: SET_PUGS,
    payload: pugs
  });
};
