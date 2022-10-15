import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Guardian', 'Kid', 'Activities'],
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
      invalidatesTags: ['Guardian', 'Kid'],
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
    addActivity: builder.mutation({
      query: (activity) => ({
        url: '/activities',
        method: 'POST',
        body: activity,
      }),
      invalidatesTags: ['Kid'],
    }),
    deleteActivity: builder.mutation({
      query: (id) => ({
        url: `/activities/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Activities', 'Kid'],
    }),
    getActivities: builder.query({
      query: (id) => `/dashboard/${id}`,
      providesTags: ['Activities'],
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
  useAddActivityMutation,
  useDeleteActivityMutation,
  useGetActivitiesQuery,
} = apiSlice;
