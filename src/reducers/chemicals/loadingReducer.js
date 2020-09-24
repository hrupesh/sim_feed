import { CHEMICALS } from "../../constants";

const chemicalloadingReducer = (state = false, action) => {
  switch (action.type) {
    case CHEMICALS.LOAD:
      return true;
    case CHEMICALS.LOAD_SUCCESS:
      return false;
    case CHEMICALS.LOAD_FAIL:
      return false;
    default:
      return state;
  }
};

export default chemicalloadingReducer;
