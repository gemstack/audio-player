import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import homeSaga from "../containers/Home/saga";

function* rootSaga() {
  yield all([fork(homeSaga)]);
}

const sagaMiddleware = createSagaMiddleware();

export const startSaga = () => {
  sagaMiddleware.run(rootSaga);
};

export default sagaMiddleware;
