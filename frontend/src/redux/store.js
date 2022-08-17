import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";

// const reducer = combineReducers({
//   cart: cartReducer,
// })

// const middleware = [thunk];

const store = configureStore({ reducer: { cartReducer, } })
// , composeWithDevTools(applyMiddleware(...middleware)));

export default store;