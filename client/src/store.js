import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { apiUserSlice } from './features/api/apiUserSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiUserSlice.reducerPath]: apiUserSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  middleware1: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiUserSlice.middleware),
});
