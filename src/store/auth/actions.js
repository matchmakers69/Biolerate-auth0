import { SET_AUTHENTICATION, SET_USER_FROM_TOKEN } from './types';
import { getUserFromToken } from './auth.service';

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
