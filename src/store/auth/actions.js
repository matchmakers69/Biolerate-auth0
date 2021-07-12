import { SET_AUTHENTICATION, SET_USER_FROM_TOKEN, LOGOUT_USER, UPDATE_USER_PROFILE, UPDATE_ACCESSTOKEN } from './types';
import { getUserFromToken } from './auth.service';
import { constants } from '../../constants';
import { persistor } from 'store';

const { ROOT } = constants.route;

const setAuthData = (authData) => ({
  type: SET_AUTHENTICATION,
  payload: {
    authData,
  },
});

const setUserFromToken = (userData) => ({
  type: SET_USER_FROM_TOKEN,
  payload: {
    userData,
  },
});

export const setAuthCredentials = (auth) => (dispatch, getState) => {
  dispatch(setAuthData(auth));

  const { objAuthData } = getState().auth;

  if (objAuthData) {
    const objDecodedToken = getUserFromToken(objAuthData.idToken);
    dispatch(setUserFromToken(objDecodedToken));
  }
};

export const logout = (history) => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
  // localStorage.removeItem('persist:root');
  persistor.purge();
  history.push(ROOT);
};

export const updateUserProfile = (profileData) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_PROFILE,
    payload: {
      profileData,
    },
  });
};

export const updateAccessToken = (token) => (dispatch) => {
  dispatch({
    type: UPDATE_ACCESSTOKEN,
    payload: {
      token,
    },
  });
};
