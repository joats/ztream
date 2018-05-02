import { setAccessToken, fetchUser } from './api_actions';

export const SET_USER = 'set_user'
export const FAIL_USER = 'fail_user'

export const setAuthToAPI = token => async dispatch => {
  setAccessToken(token, dispatch)
}

export const getCurrentUser = () => async dispatch => {
  let user = await fetchUser(dispatch)

  if (user) {
    dispatch({ type: SET_USER, payload: user })
  } else {
    dispatch({ type: FAIL_USER })
  }
}
