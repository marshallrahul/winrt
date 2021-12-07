import axios from "axios";
import ProductActionTypes from "./product.types";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ProductActionTypes.PRODUCT_LIST_REQUEST });

    const graphqlQuery = {
      query: `{
				products{
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
