import { combineReducers } from 'redux';
import playlists from './playlist_reducer';
import user from './user_reducer';

export default combineReducers({
  playlists,
  user,
})
