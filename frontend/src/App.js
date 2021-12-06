import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./Screens/homepage/homepage";
import Product from "./Screens/product/product.component";
import SignIn from "./Screens/sign-in/sign-in.component";
import SignUp from "./Screens/sign-up/sign-up.component";
import Collection from "./Screens/collection/collection.component";
import Cart from "./Screens/cart/cart.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/collections" element={<Collection />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
