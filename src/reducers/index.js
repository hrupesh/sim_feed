import loadingReducer from "./loadingReducer";
import videosReducer from "./videosReducer";
import errorReducer from "./errorReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  videos: videosReducer,
  error: errorReducer,
});

export default rootReducer;
