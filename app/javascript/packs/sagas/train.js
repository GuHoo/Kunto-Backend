import { put, call } from "redux-saga/effects";
import { delay } from "redux-saga";
import axios from "axios";
import * as actions from "../actions";

const url = path => `${process.env.RAILS_API_SERVER}/api/${path}`;

const fetchTrainingRerequest = () => axios.get(url("trains"));

export function* trainingSaga(action) {
  yield put(actions.fetchStart());
  try {
    const response = yield call(fetchTrainingRerequest);
    yield delay(500);
    yield put(actions.successFetchTaining(response.data));
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
