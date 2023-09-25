import { createSlice } from "@reduxjs/toolkit";

export const toggleCartView = createSlice({
  name: "toggleCartView",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
      console.log(state.value);
    },
  },
});

export const { toggle } = toggleCartView.actions;

export default toggleCartView.reducer;
