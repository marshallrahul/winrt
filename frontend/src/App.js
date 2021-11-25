import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./Screens/homepage/homepage";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
