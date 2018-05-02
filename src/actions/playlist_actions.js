import { fetchPlaylists } from './api_actions';

export const SET_PLAYLISTS = 'set_playlists'

export const getPlaylists = () => async dispatch => {
  let playlists = await fetchPlaylists()

  if (playlists) {
    dispatch({ type: SET_PLAYLISTS, payload: playlists })
  }
}
