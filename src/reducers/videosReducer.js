import { VIDEOS } from "../constants";

const videosReducer = (state = [], action) => {
  switch (action.type) {
    case VIDEOS.LOAD_SUCCESS:
      return [...state, ...action.images];
    default:
      return state;
  }
};

export default videosReducer;
