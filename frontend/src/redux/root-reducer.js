import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import {
  productReducer,
  productDetailsReducer,
} from "./product/product.reducer";
import {
  userRegisterReducer,
  userLoginReducer,
  userFacebookLoginReducer,
  userGoogleLoginReducer,
} from "./user/user.reducers";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userFacebookLogin: userFacebookLoginReducer,
  userGoogleLogin: userGoogleLoginReducer,
});

export default rootReducer;
