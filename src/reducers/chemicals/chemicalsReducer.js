import { CHEMICALS } from "../../constants";

const chemicalsReducer = (state = [], action) => {
  switch (action.type) {
    case CHEMICALS.LOAD_SUCCESS:
      return [action.chemicals];
    default:
      return state;
  }
};

export default chemicalsReducer;
