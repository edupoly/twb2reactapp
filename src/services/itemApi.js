// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const itemApi = createApi({
  reducerPath: "itemApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/items" }),
  endpoints: (builder) => ({
    getAllItems: builder.query({
      query: () => `/`,
    }),
    addItem: builder.mutation({
      query: (item) => {
        return {
          url: "/",
          method: "POST",
          body: item,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useAddItemMutation,
  useGetAllItemsQuery,
  useLazyGetAllItemsQuery,
} = itemApi;
