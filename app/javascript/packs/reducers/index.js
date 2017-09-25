import { combineReducers } from "redux";
import { createReducer } from "redux-act";
import * as actions from "../actions";
import User from "../models/user";
import Train from "../models/train";
import Snackbar from "../models/snackbar";
import TrainRecord from "../models/trainRecord";
import UserTrainMenu from "../models/userTrainMenu";

export const initalState = {
  user: { state: new User().restore() },
  waitting: { state: false },
  snackbar: { state: new Snackbar() },
  trainingRecords: { state: [] },
  training: { state: [] },
  userTrainingMenu: { state: null }
};

const user = createReducer(
  {
    [actions.successSignUp]: (_1, payload) => {
      const user = new User(payload);
      return { state: user };
    },
    [actions.successSignIn]: (_1, payload) => {
      const user = new User(payload);
      return { state: user };
    },
    [actions.refreshUser]: (_1, payload) => {
      const user = new User(payload).restore();
      return user;
    }
  },
  initalState.user
);

const waitting = createReducer(
  {
    [actions.fetchStart]: () => ({ state: true }),
    [actions.fetchEnd]: () => ({ state: false })
  },
  initalState.waitting
);

const snackbar = createReducer(
  {
    [actions.openSnackbar]: (_1, payload) => {
      const snackbar = new Snackbar({
        message: payload.message,
        isOpen: true
      });
      return { state: snackbar };
    },
    [actions.closeSnackbar]: (_1, payload) => {
      const snackbar = new Snackbar();
      return { state: snackbar };
    }
  },
  initalState.snackbar
);

const trainingRecords = createReducer(
  {
    [actions.successFetchTainingRecord]: (_1, payload) => {
      const trainingRecordList = payload
        .map(tr => new TrainRecord(tr))
        .filter(tr => tr);
      return { state: trainingRecordList };
    }
  },
  initalState.trainingRecords
);

const training = createReducer(
  {
    [actions.successFetchTaining]: (_1, payload) => {
      const trainingList = payload
        .map(training => new Train(training))
        .filter(training => training);
      return { state: trainingList };
    }
  },
  initalState.training
);

const userTrainingMenu = createReducer(
  {
    [actions.successFetchUserTrainingMenu]: (_1, payload) => {
      const utm = new UserTrainMenu(payload);
      return { state: utm };
    }
  },
  initalState.userTrainingMenu
);

export default combineReducers({
  user,
  snackbar,
  waitting,
  trainingRecords,
  training,
  userTrainingMenu
});
