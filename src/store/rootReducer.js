import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import authReducer from 'store/auth/reducer';

const history = createBrowserHistory();

const rootReducer = combineReducers({
  auth: authReducer,
  router: connectRouter(history),
});

export default rootReducer;
