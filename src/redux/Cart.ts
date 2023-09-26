import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../components/ItemList";

interface CartObject {
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
      state.value.push(action.payload);
    },
    remove: (state, action: PayloadAction<Item>) => {
      state.value.splice(state.value.findIndex((element) => element.id == action.payload.id), 1);
    }
  },
});

export const { add, remove } = Cart.actions;

export default Cart.reducer;