import { fetchPlaylists } from './api_actions';

// Actions
export const SET_PLAYLISTS = 'set_playlists'
export const SET_ACTIVE_PLAYLIST = 'set_active_playlist'

export const getPlaylists = () => async dispatch => {
  let playlists = await fetchPlaylists()

  if (playlists) {
    dispatch({ type: SET_PLAYLISTS, payload: playlists })
  }
}

export const setActivePlaylist = playlistId => async dispatch => {
  dispatch({ type: SET_ACTIVE_PLAYLIST, payload: playlistId })
}
