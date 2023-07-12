import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaderOn: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setIsLoaderOn(state) {
      state.isLoaderOn = true;
    },
    setIsLoaderOff(state) {
      state.isLoaderOn = false;
    },
  },
});

export const { setIsLoaderOn, setIsLoaderOff } = loaderSlice.actions;

export default loaderSlice.reducer;
