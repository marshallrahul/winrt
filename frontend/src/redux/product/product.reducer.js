import ProductActionTypes from "./product.types";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ProductActionTypes.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case ProductActionTypes.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ProductActionTypes.PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ProductActionTypes.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ProductActionTypes.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
