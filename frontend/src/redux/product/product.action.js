import axios from "axios";
import ProductActionTypes from "./product.types";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST });

    const graphqlQuery = {
      query: `{
				products{
          _id
					name
					image
					description
					price
					countInStock
					rating
				}
			}`,
    };

    const {
      data: {
        data: { products },
      },
    } = await axios({
      url: "http://localhost:5000/graphql",
      method: "POST",
      data: graphqlQuery,
    });

    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductDetails = (prodId) => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_DETAILS_REQUEST });

    const graphqlQuery = {
      query: `{
        product(prodId:"${prodId}"){
          _id
          name
          image
          description
          price
          countInStock
          rating
        }
      }`,
    };

    const {
      data: {
        data: { product },
      },
    } = await axios({
      url: "http://localhost:5000/graphql",
      method: "POST",
      data: graphqlQuery,
    });

    dispatch({
      type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: product,
    });
  } catch (error) {
    dispatch({
      type: ProductActionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
