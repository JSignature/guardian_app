import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['POST'],
  endpoints: (builder) => ({
    getGuardians: builder.query({
      query: () => '/guardians',
    }),
  }),
});

export const { useGetGuardiansQuery } = apiSlice;
