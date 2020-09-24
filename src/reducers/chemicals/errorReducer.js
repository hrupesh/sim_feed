import { CHEMICALS } from "../../constants";

const chemicalErrorReducer = (state = null, action) => {
  switch (action.type) {
    case CHEMICALS.LOAD_FAIL:
      return action.error;
    case CHEMICALS.LOAD:
    case CHEMICALS.LOAD_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default chemicalErrorReducer;
