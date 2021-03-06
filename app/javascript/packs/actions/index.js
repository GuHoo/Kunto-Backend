import { createAction } from "redux-act";

export const trySignUp = createAction("TRY_SIGN_UP");
export const successSignUp = createAction("SUCCESS_SIGN_UP");

export const trySignIn = createAction("TRY_SIGN_IN");
export const successSignIn = createAction("SUCCESS_SIGN_IN");
export const refreshUser = createAction("REFRESH_USER");

export const fetchTrainingRecord = createAction("FETCH_TRAINING_RECORD");
export const successFetchTainingRecord = createAction(
  "SUCCESS_FETCH_TRAINING_RECORD"
);

export const fetchTraining = createAction("FETCH_TRAINING");
export const successFetchTaining = createAction("SUCCESS_FETCH_TRAINING");

export const tryPostTrainingMenuAction = createAction(
  "TRY_POST_TRAINING_MENU_ACTION"
);
export const successPostTrainingMenuAction = createAction(
  "SUCCESS_POST_TRAINING_MENU_ACTION"
);

export const fetchUserTrainingMenu = createAction("FETCH_USER_TRAINING_MENU");
export const successFetchUserTrainingMenu = createAction(
  "SUCCESS_FETCH_USER_TRAINING_MENU"
);

export const tryPostTrainingRecord = createAction("TRY_POST_TRAINING_RECORD");
export const successTryPostTrainingRecord = createAction(
  "SUCCESS_TRY_POST_TRAINING_RECORD"
);

export const fetchStart = createAction("FETCH_START");
export const fetchEnd = createAction("FETCH_END");

export const failXHR = createAction("FAIL_XHR");

export const openSnackbar = createAction("OPEN_SNACKBAR");
export const closeSnackbar = createAction("CLOSE_SNACKBAR");
