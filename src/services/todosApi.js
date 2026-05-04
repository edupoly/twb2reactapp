// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3600/todos" }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {
        return {
          method: "GET",
          url: "/",
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
    addTodo: builder.mutation({
      query: (todo) => {
        return {
          method: "POST",
          url: "/",
          headers: {
            token: window.localStorage.getItem("token"),
          },
          body: { todo },
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/${id}`,
          headers: {
            token: window.localStorage.getItem("token"),
          },
        };
      },
    }),
    updateTodo: builder.mutation({
      query: (todo) => {
        return {
          method: "PUT",
          url: `/${todo.id}`,
          headers: {
            token: window.localStorage.getItem("token"),
          },
          body: todo,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTodosQuery,
  useLazyGetAllTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
