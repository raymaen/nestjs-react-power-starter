import { combineReducers } from 'redux';
import games from './games.reducer';
import notifications from 'react-redux-notify';

export default combineReducers({
  games,
  notifications
});
