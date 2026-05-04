import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import commentsReducer from "../features/comments/commentsSlice";
import { todosApi } from "../services/todosApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "../services/moviesApi";
import { userApi } from "../services/userApi";
import userReducer from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    counterR: counterReducer,
    commentsR: commentsReducer,
    userR: userReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      todosApi.middleware,
      moviesApi.middleware,
      userApi.middleware,
    ),
});
setupListeners(store.dispatch);
export default store;
