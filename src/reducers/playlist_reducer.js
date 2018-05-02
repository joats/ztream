import { SET_PLAYLISTS } from '../actions/playlist_actions';

const INITIAL_STATE = {
  playlists: [],
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: action.payload }
    default:
      return state
  }
}
