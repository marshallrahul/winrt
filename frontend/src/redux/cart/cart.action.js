import axios from "axios";
import { CART_ADD_ITEM } from "./cart.types";

export const addCartItem = (prodId, qty) => async (dispatch, getState) => {
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
    type: CART_ADD_ITEM,
    payload: {
      productData: {
        _id: product._id,
        name: product.name,
        image: product.image,
        description: product.description,
        price: product.price,
        rating: product.rating,
        countInStock: product.countInStock,
      },
      quantity: qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
