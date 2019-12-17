import { GameService } from '../../service/api';
import { GET_GAMES, UPDATE_GAME } from './game.types';
import { setError } from '../error/error.actions';
export const getGames = () => async dispatch => {
  const games = await GameService.getGames();
  if (games) {
    dispatch({
      type: GET_GAMES,
      payload: games
    });
  } else {
    dispatch(setError('Failed to fetch games'));
  }
};

export const addGames = async id => {
  await GameService.addGames(id);
  getGames();
};
