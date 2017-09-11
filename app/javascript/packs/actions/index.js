import { createAction } from 'redux-act';

export const trySignUp = createAction('TRY_SIGN_UP');
export const successSignUp = createAction('SUCCESS_SIGN_UP');

export const trySignIn = createAction('TRY_SIGN_IN');
export const successSignIn = createAction('SUCCESS_SIGN_IN');

export const fetchTrainingRecord = createAction('FETCH_TRAINING_RECORD');
export const successFetchTainingRecord = createAction('SUCCESS_FETCH_TRAINING_RECORD');

export const fetchStart = createAction('FETCH_START');
export const fetchEnd = createAction('FETCH_END');

export const failXHR = createAction('FAIL_XHR');

export const openSnackbar = createAction('OPEN_SNACKBAR');
export const closeSnackbar = createAction('CLOSE_SNACKBAR');
