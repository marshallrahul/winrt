import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {
  productReducer,
  productDetailsReducer,
} from "./product/product.reducer";
import { userRegisterReducer, userLoginReducer } from "./user/user.reducers";
import { cartReducer } from "./cart/cart.reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  cart: cartReducer,
});

export default rootReducer;
