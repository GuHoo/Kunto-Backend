import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions'

export const initalState = {
  user: ''
};

const user = createReducer({
  [actions.successSignUp]: (state, payload) => {
    console.log(state)
    console.log(payload)
  }
}, initalState.user)

export default combineReducers(
  {
    user,
  }
);
