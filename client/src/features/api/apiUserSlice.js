import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiUserSlice = createApi({
  reducerPath: 'apiUserSlice',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (userObject) => {
        return {
          url: '/login',
          method: 'POST',
          body: userObject,
        };
      },
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: '/users',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useAddUserMutation } = apiUserSlice;
