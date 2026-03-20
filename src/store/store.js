import { combineReducers, createStore } from "redux";
import counterReducer from "./counter.reducer";
import todolistReducer from "./todolist.reducer";
var store = createStore(
  combineReducers({ countR: counterReducer, todolistR: todolistReducer }),
);
export default store;
