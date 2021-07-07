import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import updateUiReducer from 'store/ui/reducer';
import authReducer from 'store/auth/reducer';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  auth: authReducer,
  ui: updateUiReducer,
  router: connectRouter(history),
});

export default rootReducer;
