import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions'
import User from '../models/user';
import Snackbar from '../models/snackbar';

export const initalState = {
  user: { state: new User().restore() },
  waitting: { state: false },
  snackbar: { state: new Snackbar() },
  trainingRecords: { state: [] },
};

const user = createReducer({
  [actions.successSignUp]: (_1, payload) => {
    const user = new User(payload);
    return { state: user };
  },
  [actions.successSignIn]: (_1, payload) => {
    const user = new User(payload);
    return { state: user };
  },
}, initalState.user);

const waitting = createReducer({
  [actions.fetchStart]: () => ({ state: true }),
  [actions.fetchEnd]: () => ({ state: false }),
}, initalState.waitting);

const snackbar = createReducer({
  [actions.openSnackbar]: (_1, payload) => {
    const snackbar = new Snackbar({
      message: payload.message,
      isOpen: true,
    });
    return { state: snackbar };
  },
  [actions.closeSnackbar]: (_1, payload) => {
    const snackbar = new Snackbar();
    return { state: snackbar };
  },
}, initalState.snackbar);

const trainingRecords = createReducer({

}, initalState.trainingRecords);

export default combineReducers(
  {
    user,
    snackbar,
    waitting,
    trainingRecords,
  }
);
