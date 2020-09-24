import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import videosSaga from "../sagas";
import chemicalsSaga from "../sagas/chemicalsSaga";

import rootReducer from "../reducers";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(videosSaga);
  sagaMiddleware.run(chemicalsSaga);

  return store;
};

export default configureStore;
