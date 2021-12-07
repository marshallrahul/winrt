import { combineReducers } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import productReducer from "./product/product.reducer";

// const persistConfig = {
//   key: "root",
//   storage,
// };

const rootReducer = combineReducers({
  products: productReducer,
});

export default rootReducer;
