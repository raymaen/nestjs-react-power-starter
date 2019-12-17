import { combineReducers } from 'redux';
import game from './games/game.reducer';
import error from './error/error.reducer';

export default combineReducers({
  game,
  error
});
