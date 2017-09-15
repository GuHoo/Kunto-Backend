import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import axios from 'axios';
import * as actions from '../actions';
import history from '../lib/history';

const url = (path) => (
  `${process.env.RAILS_API_SERVER}/api/${path}`
);

const postTrainingMenuRequest = (payload) => (
  axios.post(url('menu_trains'), payload)
);

export function* trainingMenuSaga(action) {
  yield put(actions.fetchStart());
  const { payload } = action;
  try {
    const response = yield call(postTrainingMenuRequest, payload);
    yield delay(500);
    yield put(actions.successPostTrainingMenuAction(response.data));
    yield call(history.push, '/my')
  } catch (_err) {
    yield delay(500);
    yield put(actions.failXHR({
      message: 'トレーニングメニューの作成に失敗しました',
    }));
  }
  yield put(actions.fetchEnd());
}
