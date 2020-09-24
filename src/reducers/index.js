import loadingReducer from "./loadingReducer";
import videosReducer from "./videosReducer";
import errorReducer from "./errorReducer";
import chemicalloadingReducer from "./chemicals/loadingReducer";
import chemicalsReducer from "./chemicals/chemicalsReducer";
import chemicalsErrorReducer from "./chemicals/errorReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  videos: videosReducer,
  error: errorReducer,
  chemicalsisLoading: chemicalloadingReducer,
  chemicals: chemicalsReducer,
  chemicalsError: chemicalsErrorReducer,
});

export default rootReducer;
