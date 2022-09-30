import { createSlice } from '@reduxjs/toolkit';
import guardiansTestData from '../../guardiansTestData';

const initialState = {
  guardians: guardiansTestData,
  isLoading: true,
};

const guardiansSlice = createSlice({
  name: 'guardians',
  initialState,
});

// console.log(guardiansSlice);

export default guardiansSlice.reducer;
