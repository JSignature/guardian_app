import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: ' ' }),
  tagTypes: ['Guardian', 'Kid'],
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
    //Need to make kids
    getKids: builder.query({
      query: () => '/kids',
      providesTags: ['Kid'],
    }),
    addKid: builder.mutation({
      query: (kid) => ({
        url: '/kids',
        method: 'POST',
        body: kid,
      }),
      invalidatesTags: ['Kid'],
    }),
    deleteKid: builder.mutation({
      query: (id) => ({
        url: `/kids/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Kid'],
    }),
    getKid: builder.query({
      query: (id) => `/kids/${id}`,
      providesTags: ['Kid'],
    }),
    updateKid: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/kids/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Kid'],
    }),
  }),
});

export const {
  useGetGuardiansQuery,
  useGetGuardianQuery,
  useAddGuardianMutation,
  useDeleteGuardianMutation,
  useUpdateGuardianMutation,
  useGetKidsQuery,
  useGetKidQuery,
  useAddKidMutation,
  useDeleteKidMutation,
  useUpdateKidMutation,
} = apiSlice;
