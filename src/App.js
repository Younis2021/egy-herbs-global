import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyles";

import Header from "./Components/Header/Header";
import HomePage from "./Components/Home-Page/Home-Page";
import ProductPage from "./Components/Product-Page/Product-Page";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

export default function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <div className="page-div">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
