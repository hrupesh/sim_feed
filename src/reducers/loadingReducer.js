import { VIDEOS } from "../constants";

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case VIDEOS.LOAD:
      return true;
    case VIDEOS.LOAD_SUCCESS:
      return false;
    case VIDEOS.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
