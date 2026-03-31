// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const tableApi = createApi({
  reducerPath: "tableApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/tables" }),
  endpoints: (builder) => ({
    getAllTables: builder.query({
      query: () => `/`,
    }),
    addTable: builder.mutation({
      query: (table) => {
        return {
          url: "/",
          method: "POST",
          body: table,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllTablesQuery,
  useLazyGetAllTablesQuery,
  useAddTableMutation,
} = tableApi;
