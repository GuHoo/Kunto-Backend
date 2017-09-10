import { fork, take, put, call, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { push } from 'react-router-redux';
import axios from 'axios';
import * as actions from '../actions';

const url = (path) => (
  `${process.env.RAILS_API_SERVER}/api/${path}`
);

const signUpRequest = ({ email, password, passwordConfirmation }) => (
  axios.post(url('/users/sign_up'), {
    email,
    password,
    password_confirmation: passwordConfirmation,
  })
);

const signInRequest = ({ email, password }) => (
  axios.post(url('/users/sign_in'), {
    email,
    password,
  })
)

function* signInSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(signInRequest, payload);
    yield delay(200);
    yield put(actions.successSignIn(response.data));
    yield put(push('/my'));
  } catch (_err) {
    yield delay(200);
    yield put(actions.failXHR({
      message: '登録されていないメールアドレス，もしくはパスワードに入力ミスがあります'
    }));
  }
  yield put(actions.fetchEnd());
}

function* signUpSaga(action) {
  const { payload } = action;
  yield put(actions.fetchStart());
  try {
    const response = yield call(signUpRequest, payload);
    yield delay(200);
    yield put(actions.successSignUp(response.data));
    yield put('/my');
  } catch (_err) {
    yield delay(200);
    yield put(actions.failXHR({
      message: 'すでに登録されたメールアドレスか，パスワードに入力ミスがあります'
    }));
  }
  yield put(actions.fetchEnd());
}

function* errorHandlingSaga(action) {
  const { payload } = action;
  yield put(actions.openSnackbar({ message: payload.message }));
  yield delay(10000);
  yield put(actions.closeSnackbar());
}

export default function* rootSaga() {
  yield takeEvery(`${actions.trySignUp}`, signUpSaga);
  yield takeEvery(`${actions.failXHR}`, errorHandlingSaga);
  yield takeEvery(`${actions.trySignIn}`, signInSaga);
}
