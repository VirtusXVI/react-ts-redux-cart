import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../components/ItemList";

export interface CartObject {
  value: Array<Item>;
}

const initialState: CartObject = {
  value: [],
};

export const Cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Item>) => {
      const itemInCart = state.value.find((item) => item.id == action.payload.id);
      if(itemInCart){
        itemInCart.quantity++;
        return
      }
      return { ...state, value: [...state.value, action.payload] };
    },
    remove: (state, action: PayloadAction<Item>) => {
      return {
        ...state,
        value: state.value.filter((item) => item.id != action.payload.id),
      };
    },
    decreaseQuantity: (state, action: PayloadAction<Item>) => {
      const itemInCart = state.value.find((item) => item.id == action.payload.id);
      if(itemInCart?.quantity == 1){
        return {
          ...state,
          value: state.value.filter((item) => item.id != action.payload.id),
        };
      }
      if(itemInCart){
        itemInCart.quantity--;
        return
      }
    }
  },
});

export const { add, remove, decreaseQuantity } = Cart.actions;

export default Cart.reducer;
