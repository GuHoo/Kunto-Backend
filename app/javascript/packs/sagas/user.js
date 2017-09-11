import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import axios from 'axios';
import * as actions from '../actions';

const url = (path) => (
  `${process.env.RAILS_API_SERVER}/api/${path}`
);

const signUpRequest = ({ email, password, passwordConfirmation }) => (
  axios.post(url('users/sign_up'), {
    email,
    password,
    password_confirmation: passwordConfirmation,
  })
);

const signInRequest = ({ email, password }) => (
  axios.post(url('users/sign_in'), {
    email,
    password,
  })
);

export function* signInSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(signInRequest, payload);
    yield delay(200);
    yield put(actions.successSignIn(response.data));
    yield put(push('/my'));
    yield put(actions.openSnackbar({ message: 'おかえりなさい' }));
    yield delay(10000);
    yield put(actions.closeSnackbar());
  } catch (_err) {
    yield delay(200);
    yield put(actions.failXHR({
      message: '登録されていないメールアドレス，もしくはパスワードに入力ミスがあります'
    }));
  }
  yield put(actions.fetchEnd());
}

export function* signUpSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(signUpRequest, payload);
    yield delay(200);
    yield put(actions.successSignUp(response.data));
    yield put(push('/my'));
    yield put(actions.openSnackbar({ message: 'ようこそ，薫陶へ' }));
    yield delay(10000);
    yield put(actions.closeSnackbar());
  } catch (_err) {
    yield delay(200);
    yield put(actions.failXHR({
      message: 'すでに登録されたメールアドレスか，パスワードに入力ミスがあります'
    }));
  }
  yield put(actions.fetchEnd());
}
