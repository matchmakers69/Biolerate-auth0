import { UPDATE_APP_UI } from './types';

const objInitialState = {
  displayHeader: true,
  displayFooter: true,
};

const updateUiReducer = (state = objInitialState, action) => {
  switch (action.type) {
    case UPDATE_APP_UI: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export default updateUiReducer;
