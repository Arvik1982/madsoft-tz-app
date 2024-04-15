import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    timeOver: false,
  },
  reducers: {
    setTimeOver(state, action: PayloadAction<boolean>) {
      state.timeOver = action.payload;
      console.log(state.timeOver);
    },
  },
});

export const { setTimeOver } = appSlice.actions;

export default appSlice.reducer;
