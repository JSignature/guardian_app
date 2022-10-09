import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/api/apiSlice';
import { apiUserSlice } from './features/api/apiUserSlice';
import { setupListeners } from '@reduxjs/toolkit/query/react';

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

//Added these in order to trigger a cache clear of store from logout button

// setupListeners(store.dispatch);
// export default store;
