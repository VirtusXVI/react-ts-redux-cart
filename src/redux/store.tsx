import { configureStore } from "@reduxjs/toolkit";
import ToggleCartView from "./ToggleCartView";

export default configureStore(
  {
    reducer: {
      toggleCartView: ToggleCartView
    }
  }
)