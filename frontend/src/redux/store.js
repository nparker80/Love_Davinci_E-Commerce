import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./reducers/cartReducers";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})