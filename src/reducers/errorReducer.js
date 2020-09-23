import { VIDEOS } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case VIDEOS.LOAD_FAIL:
      return action.error;
    case VIDEOS.LOAD:
    case VIDEOS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducer;
