import { SET_AUTHENTICATION } from './types';

const objInitialState = {
  objAuthData: null,
};

const authReducer = (state = objInitialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION: {
      return {
        ...state,
        objAuthData: action.payload.authData,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
