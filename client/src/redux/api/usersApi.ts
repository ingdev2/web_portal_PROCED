import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], null>({
      query: () => "getAllUsers",
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `getUser/${id}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;