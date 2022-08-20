import * as actionTypes from "../constants/itemConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_ITEMS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_ITEMS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEM_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_ITEM_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_ITEM_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_ITEM_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};