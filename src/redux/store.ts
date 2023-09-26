import { configureStore } from "@reduxjs/toolkit";
import ToggleCartView from "./ToggleCartView";
import Cart from "./Cart";

export const store = configureStore({
  reducer: {
    toggleCartView: ToggleCartView,
    CartController: Cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
