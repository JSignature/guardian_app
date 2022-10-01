import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import GuardianCard from '../../components/GuardianCard';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: ' ' }),
  tagTypes: ['Guardian'],
  endpoints: (builder) => ({
    getGuardians: builder.query({
      query: () => '/guardians',
      providesTags: ['Guardian'],
    }),
    addGuardian: builder.mutation({
      query: (guardian) => ({
        url: '/guardians',
        method: 'POST',
        body: guardian,
      }),
      invalidatesTags: ['Guardian'],
    }),
    deleteGuardian: builder.mutation({
      query: (id) => ({
        url: `/guardians/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Guardian'],
    }),
    getGuardian: builder.query({
      query: (id) => `/guardians/${id}`,
      providesTags: ['Guardian'],
    }),
    updateGuardian: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/guardians/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Guardian'],
    }),
  }),
});

export const {
  useGetGuardiansQuery,
  useGetGuardianQuery,
  useAddGuardianMutation,
  useDeleteGuardianMutation,
  useUpdateGuardianMutation,
} = apiSlice;
