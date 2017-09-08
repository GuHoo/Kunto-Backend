import { fork, take } from 'redux-saga/effects';
import * as actions from '../actions';

const x = undefined;

function* sampleSaga() {
  while (typeof x === 'undefined') {
    yield take(`${actions.sampleAction}`);
  }
}

export default function* rootSaga() {
  yield fork(sampleSaga);
}
