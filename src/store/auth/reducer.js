import { SET_AUTHENTICATION, SET_USER_FROM_TOKEN, LOGOUT_USER, UPDATE_USER_PROFILE, UPDATE_ACCESSTOKEN } from './types';

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
    case LOGOUT_USER: {
      return {
        ...state,
        objAuthData: null,
        objAuthUser: null,
      };
    }

    case UPDATE_USER_PROFILE: {
      const updatedProfile = { ...state.objAuthUser, ...action.payload.profileData };

      return {
        ...state,
        objAuthUser: updatedProfile,
      };
    }

    case UPDATE_ACCESSTOKEN: {
      return {
        ...state,
        objAuthData: { ...state.objAuthData, ...action.payload.token },
      };
    }
    default:
      return state;
  }
};

// userData

export default authReducer;
