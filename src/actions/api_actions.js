import axios from 'axios';

const BASE_URL = 'https://api.spotify.com/v1'

// Authorization
export const setAccessToken = async (token, dispatch) => {
  localStorage.setItem('token', token)
  // const access_token = localStorage.getItem('token')
}

// User
export const fetchUser = async dispatch => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + '/me', {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    }).then(data => {
      return data.data
    })
}

// Playlists
export const fetchPlaylists = async dispatch => {
  const token = localStorage.getItem('token')
  const authString = 'Bearer ' + token

  return await axios
    .get(BASE_URL + '/me/playlists', {
      headers: {
        Accept: 'application/json',
        Authorization: authString
      }
    }).then(data => {
      return data.data.items
    })
}
