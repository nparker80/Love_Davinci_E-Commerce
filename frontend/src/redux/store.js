import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./reducers/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from './reducers/itemReducers';


const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};
const store = configureStore({
  reducer: {
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
  }, preloadedState: initialState,
})
export default store;