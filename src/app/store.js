import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import commentsReducer from "../features/comments/commentsSlice";
import { todosApi } from "../services/todosApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tableApi } from "../services/tableApi";
import { itemApi } from "../services/itemApi";
const store = configureStore({
  reducer: {
    counterR: counterReducer,
    commentsR: commentsReducer,
    [todosApi.reducerPath]: todosApi.reducer,
    [tableApi.reducerPath]: tableApi.reducer,
    [itemApi.reducerPath]: itemApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      todosApi.middleware,
      tableApi.middleware,
      itemApi.middleware,
    ),
});
setupListeners(store.dispatch);
export default store;
