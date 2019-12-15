import axios from 'axios';
import { ApiHandler } from '../../service/api';
import { GET_GAMES, UPDATE_GAME } from './types';

export const getGames = () => async dispatch => {
  const games = await ApiHandler.getGames();

  dispatch({
    type: GET_GAMES,
    payload: games
  });
};

export const addGames = async id => {
  await ApiHandler.addGames(id);
  getGames();
};
