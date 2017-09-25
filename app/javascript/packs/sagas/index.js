import { takeEvery, fork, put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "../actions";
import { userRootSaga } from "./user";
import { trainingRecordRootSaga } from "./trainRecord";
import { trainingSaga } from "./train";
import { trainingMenuSaga } from "./trainMenu";
import { userTrainMenuSaga } from "./userTrainMenu";

function* errorHandlingSaga(action) {
  const { payload } = action;
  yield put(actions.openSnackbar({ message: payload.message }));
  yield delay(10000);
  yield put(actions.closeSnackbar());
}

export default function* rootSaga() {
  yield takeEvery(`${actions.failXHR}`, errorHandlingSaga);
  yield takeEvery(`${actions.fetchTraining}`, trainingSaga);
  yield takeEvery(`${actions.tryPostTrainingMenuAction}`, trainingMenuSaga);
  yield takeEvery(`${actions.fetchUserTrainingMenu}`, userTrainMenuSaga);
  yield fork(userRootSaga);
  yield fork(trainingRecordRootSaga);
}
