import _ from 'lodash';
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import axios from 'axios';
import * as actions from '../actions';

const url = (path) => (
  `${process.env.RAILS_API_SERVER}/api/${path}`
);

const fetchUserTrainMenuRequest = ({ token }) => (
  axios.get(url(`menu_trains?token=${token}`))
);

export function* userTrainMenuSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(fetchUserTrainMenuRequest, payload);
    yield put(actions.successFetchUserTrainingMenu(response.data));
  } catch (err) {
    const status = _.get(err, ['response', 'status'], -1);
    switch (status) {
      case 400:
        // TODO: should use react-router
        if (location.pathname !== '/menus/new') location.href = `${location.origin}/menus/new`;
        break;
      case 401:
        localStorage.clear();
        yield put(actions.refreshUser());
        yield delay(500);
        // TODO: should use react-router
        if (location.pathname !== '/sign_in') location.href = `${location.origin}/sign_in`;
        break;
      default:
        yield put(actions.failXHR({
          message: 'サーバーとの接続に失敗しました',
        }));
    }
  }
  yield put(actions.fetchEnd());
}
