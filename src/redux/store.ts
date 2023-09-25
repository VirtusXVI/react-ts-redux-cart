import { configureStore } from "@reduxjs/toolkit";
import ToggleCartView from "./ToggleCartView";

export const store = configureStore(
  {
    reducer: {
      toggleCartView: ToggleCartView
    }
  }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;