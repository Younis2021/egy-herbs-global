import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyles";

import Header from "./Components/Header/Header";
import HomePage from "./Components/Home-Page/Home-Page";
import ProductPage from "./Components/Product-Page/Product-Page";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FloatingActionButton from "./Components/FloatingActionButton/Test";


export default function App() {
  const location = useLocation();

  // useEffect(() => {
  //   // This useEffect will run every time the route changes
  //   window.scrollTo(0, 0);
  // }, [location]);

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
        <FloatingActionButton />
      </div>
    </>
  );
}
