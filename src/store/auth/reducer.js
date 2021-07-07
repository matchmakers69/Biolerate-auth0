import { SET_AUTHENTICATION, SET_USER_FROM_TOKEN } from './types';

const objInitialState = {
  objAuthData: null,
  objAuthUser: null,
};

const authReducer = (state = objInitialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION: {
      return {
        ...state,
        objAuthData: action.payload.authData,
      };
    }
    case SET_USER_FROM_TOKEN: {
      return {
        ...state,
        objAuthUser: action.payload.userData,
      };
    }
    default:
      return state;
  }
};

// userData

export default authReducer;
