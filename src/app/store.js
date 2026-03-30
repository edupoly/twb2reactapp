import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import commentsReducer from "../features/comments/commentsSlice";
import { todosApi } from "../services/todosApi";
import { setupListeners } from "@reduxjs/toolkit/query";
const store = configureStore({
  reducer: {
    counterR: counterReducer,
    commentsR: commentsReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
setupListeners(store.dispatch);
export default store;
