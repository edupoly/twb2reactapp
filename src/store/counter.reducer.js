import { DEC, INC, RESET } from "./actionTypes";

//state
const initialState = {
  count: 0,
};
//logic
function counterReducer(state = initialState, action) {
  if (action.type === INC) {
    return { count: state.count + 1 };
  }
  if (action.type === DEC) {
    return { count: state.count - 1 };
  }
  if (action.type === RESET) {
    return { count: 0 };
  }
  return state;
}

export default counterReducer;
