import { createSlice } from "@reduxjs/toolkit";

interface toggleState {
  value: boolean
}

// Define the initial state using that type
const initialState: toggleState = {
  value: false,
}

export const toggleCartView = createSlice({
  name: "toggleCartView",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
      console.log(state.value);
    },
  },
});

export const { toggle } = toggleCartView.actions;

export default toggleCartView.reducer;
