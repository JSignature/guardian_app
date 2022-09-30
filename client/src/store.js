import { configureStore } from '@reduxjs/toolkit';
import guardiansReducer from './features/guardians/guardiansSlice';

export const store = configureStore({
  reducer: {
    guardians: guardiansReducer,
  },
});
