import { combineReducers } from 'redux';
import pugs from './pug.reducer';
import notifications from 'react-redux-notify';

export default combineReducers({
  pugs,
  notifications
});
