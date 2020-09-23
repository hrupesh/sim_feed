import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import videosSaga from "../sagas";

import rootReducer from "../reducers";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(videosSaga);

  store.dispatch({ type: "Hey!" });
  return store;
};

export default configureStore;
