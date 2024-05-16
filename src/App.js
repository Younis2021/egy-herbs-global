import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyles";

import Header from "./Components/Header/Header";
import HomePage from "./Components/Home-Page/Home-Page";
import ProductPage from "./Components/Product-Page/Product-Page";

export default function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </div>
    </>
  );
}
