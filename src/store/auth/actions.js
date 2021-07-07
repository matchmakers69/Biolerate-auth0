import { SET_AUTHENTICATION } from './types';

const setAuthData = (authData) => ({
  type: SET_AUTHENTICATION,
  payload: {
    authData,
  },
});

// Redux thunk (instead of object we return function)
export const setAuthCredentials = (auth) => (dispatch) => {
  dispatch(setAuthData(auth));
};
