import { UPDATE_APP_UI } from './types';

export const updateUI = (obj) => ({
  type: UPDATE_APP_UI,
  payload: obj,
});
