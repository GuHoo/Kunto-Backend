import { combineReducers } from 'redux';
import { createReducer } from 'redux-act';
import * as actions from '../actions'

const initalState = {
  sample: '',
};

const sample = createReducer({
  [actions.sampleAction]: (state, payload) => {
    return state;
  }
}, initalState);

export default combineReducers(
  {
    sample,
  }
);
