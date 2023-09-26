import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../components/ItemList";

export interface CartObject {
  value: Array<Item>;
}

// Define the initial state using that type
const initialState: CartObject = {
  value: [],
};

export const Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      if(state.value.find((item) => item.id === action.payload.id)) return
      return { ...state, value: [ ...state.value, action.payload ] }
    },
    remove: (state, action: PayloadAction<Item>) => {
      return { ...state, value: state.value.filter((item) => item.id != action.payload.id) }
    }
  },
});

export const { add, remove } = Cart.actions;

export default Cart.reducer;