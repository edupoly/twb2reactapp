import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import commentsReducer from "../features/comments/commentsSlice";

const store = configureStore({
  reducer: {
    counterR: counterReducer,
    commentsR: commentsReducer,
  },
});

export default store;
