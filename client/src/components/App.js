import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./Hero";
import NewProducts from "./NewProducts";

import ProductImg from "../images/product-1.jpg";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import Store from "./Store";
import Navbar from "./Navbar";
import NavbarBgImg from "../images/store-bg.jpg";

const App = () => {
  const [token, setToken] = useState(null);
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
      <Switch>
        <Route path="/login">
          <LoginPage setToken={setToken} />
        </Route>
        <Route path="/store">
          <Navbar bgImg={NavbarBgImg} />
          <Store />
        </Route>
        <Route path="/">
          <Hero />
          <NewProducts products={newProducts} />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
