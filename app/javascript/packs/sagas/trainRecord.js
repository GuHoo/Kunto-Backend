import { put, call, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";
import { push } from "react-router-redux";
import axios from "axios";
import * as actions from "../actions";

const url = path => `${process.env.RAILS_API_SERVER}/api/${path}`;

const fetchTrainingRecordRequest = ({ token }) =>
  axios.get(url(`train_records?token=${token}`));

const postTrainigRecordRequest = payload =>
  axios.post(url("train_records"), payload);

export function* postTrainigRecordSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(postTrainigRecordRequest, payload);
    yield delay(200);
    yield put(actions.successTryPostTrainingRecord());
  } catch (_err) {
    yield put(
      actions.failXHR({
        message: "レコードの記録に失敗しました"
      })
    );
  }
  yield put(actions.fetchEnd());
}

export function* callbackSuccessPostTrainingRecord() {
  yield put(actions.openSnackbar({ message: "記録しました" }));
  yield delay(5000);
  yield put(actions.closeSnackbar());
}

export function* trainingRecordSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(fetchTrainingRecordRequest, payload);
    yield delay(500);
    yield put(actions.successFetchTainingRecord(response.data));
  } catch (_err) {
    yield delay(500);
    yield put(
      actions.failXHR({
        message: "レコードの取得に失敗しました．"
      })
    );
  }
  yield put(actions.fetchEnd());
}

export function* trainingRecordRootSaga() {
  yield takeEvery(`${actions.fetchTrainingRecord}`, trainingRecordSaga);
  yield takeEvery(`${actions.tryPostTrainingRecord}`, postTrainigRecordSaga);
  yield takeEvery(
    `${actions.successTryPostTrainingRecord}`,
    callbackSuccessPostTrainingRecord
  );
}
