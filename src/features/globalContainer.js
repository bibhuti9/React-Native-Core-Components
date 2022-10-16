import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const globalContainerSlice = createSlice({
  name: 'globalContainer',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = globalContainerSlice.actions;

export default globalContainerSlice.reducer;
