import { takeEvery, fork, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as userSaga from './user';
import { trainingRecordSaga, postTrainigRecordSaga, callbackSuccessPostTrainingRecord } from './trainRecord';
import { trainingSaga } from './train';
import { trainingMenuSaga } from './trainMenu';
import { userTrainMenuSaga } from './userTrainMenu';

function* errorHandlingSaga(action) {
  const { payload } = action;
  yield put(actions.openSnackbar({ message: payload.message }));
  yield delay(10000);
  yield put(actions.closeSnackbar());
}

function* trainingRecordGroupSaga() {
  yield takeEvery(`${actions.fetchTrainingRecord}`, trainingRecordSaga);
  yield takeEvery(`${actions.tryPostTrainingRecord}`, postTrainigRecordSaga);
  yield takeEvery(`${actions.successTryPostTrainingRecord}`, callbackSuccessPostTrainingRecord);
}

export default function* rootSaga() {
  yield takeEvery(`${actions.failXHR}`, errorHandlingSaga);
  yield takeEvery(`${actions.trySignUp}`, userSaga.signUpSaga);
  yield takeEvery(`${actions.trySignIn}`, userSaga.signInSaga);
  yield takeEvery(`${actions.fetchTraining}`, trainingSaga);
  yield takeEvery(`${actions.tryPostTrainingMenuAction}`, trainingMenuSaga);
  yield takeEvery(`${actions.fetchUserTrainingMenu}`, userTrainMenuSaga);
  yield fork(trainingRecordGroupSaga);
}
