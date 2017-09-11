import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import * as actions from '../actions';
import * as userSaga from './user'
import { trainingRecordSaga } from './trainRecord';

function* errorHandlingSaga(action) {
  const { payload } = action;
  yield put(actions.openSnackbar({ message: payload.message }));
  yield delay(10000);
  yield put(actions.closeSnackbar());
}

export default function* rootSaga() {
  yield takeEvery(`${actions.failXHR}`, errorHandlingSaga);
  yield takeEvery(`${actions.trySignUp}`, userSaga.signUpSaga);
  yield takeEvery(`${actions.trySignIn}`, userSaga.signInSaga);
  yield takeEvery(`${actions.fetchTrainingRecord}`, trainingRecordSaga);
}
