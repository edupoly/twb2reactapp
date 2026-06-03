import { configureStore } from "@reduxjs/toolkit";
import userListReducer from "../features/userlist/useListSlice";
export const store = configureStore({
  reducer: {
    userListR: userListReducer,
  },
});
