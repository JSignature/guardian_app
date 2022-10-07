import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiUserSlice = createApi({
  reducerPath: 'apiUserSlice',
  baseQuery: fetchBaseQuery({ baseUrl: ' ' }),
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
  }),
});

export const { useUserLoginMutation } = apiUserSlice;
