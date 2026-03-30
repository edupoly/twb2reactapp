// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/todos" }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => `/`,
    }),
    addNewTodo: builder.mutation({
      query: (ntd) => {
        return {
          url: "/",
          method: "POST",
          body: {
            title: ntd,
            status: "not completed",
          },
        };
      },
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/${id}`,
          method: "DELETE",
        };
      },
    }),
    updateTodo: builder.mutation({
      query: (todo) => {
        return {
          url: `/${todo.id}`,
          method: "PUT",
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
  useAddNewTodoMutation,
  useLazyGetAllTodosQuery,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = todosApi;
