import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./reducers/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from './reducers/itemReducers';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer
  }
})
export default store;