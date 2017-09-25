import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers";
import rootSaga from "../sagas";

export default function configureStore(initialState) {
  const middlewares = [];
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);
  if (process.env.NODE_ENV !== "production") middlewares.push(createLogger());
  const store =
    reducer >> compose(applyMiddleware(...middlewares))(createStore);
  sagaMiddleware.run(rootSaga);
  return store;
}
