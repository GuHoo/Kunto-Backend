import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import axios from 'axios';
import * as actions from '../actions';

const url = (path) => (
  `${process.env.RAILS_API_SERVER}/api/${path}`
)
const fetchTrainingRecordRequest = ({ token }) => (
  axios.get(url(`train_records?token=${token}`))
);

export function* trainingRecordSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(fetchTrainingRecordRequest, payload);
    yield delay(500);
    yield put(actions.successFetchTainingRecord());
  } catch (_err) {
    yield delay(500);
    yield put(actions.failXHR({
      message: 'レコードの取得に失敗しました．',
    }));
  }
  yield put(actions.fetchEnd());
}
