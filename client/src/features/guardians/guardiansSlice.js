import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  guardians: [],
  isLoading: true,
};

export const getGuardians = createAsyncThunk('guardians/getGuardians', () => {
  return fetch('/guardians')
    .then((resp) => resp.json())

    .catch((err) => console.log(err));
});

const guardiansSlice = createSlice({
  name: 'guardians',
  initialState,
  reducers: {},
  extraReducers: {
    [getGuardians.pending]: (state) => {
      state.isLoading = true;
    },
    [getGuardians.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.guardians = action.payload;
    },
    [getGuardians.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default guardiansSlice.reducer;
