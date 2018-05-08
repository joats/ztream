import {
  SET_PLAYLISTS,
  SET_ACTIVE_PLAYLIST,
  } from '../actions/playlist_actions';

const INITIAL_STATE = {
  playlists: [],
  activePlaylistId: null,
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: action.payload }
    case SET_ACTIVE_PLAYLIST:
      return { ...state, activePlaylistId: action.payload }
    default:
      return state
  }
}
