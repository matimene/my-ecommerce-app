import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Hero";
import NewProducts from "./NewProducts";

import ProductImg from "../images/product-1.jpg";
import Footer from "./Footer";
import Form from "./Form";
import LoginPage from "./LoginPage";
import Store from "./Store";

const App = () => {
  const categories = ["pizza", "sweets", "all"];
  const newProducts = [
    { img: ProductImg, title: "Pizza", price: 9.95 },
    { img: ProductImg, title: "Pizza", price: 9.95 },
    { img: ProductImg, title: "Pizza", price: 9.95 },
    { img: ProductImg, title: "Pizza", price: 9.95 },
  ];

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Hero />
      <NewProducts products={newProducts} />
      <NewProducts products={newProducts} />
      <LoginPage />
      <Store />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
