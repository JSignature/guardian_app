import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../src/store';

// export interface AuthState {

//     name,
//     token
// }

const initialState = {
  name: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action),
  },
});
