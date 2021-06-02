import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../context";
import Hero from "./Hero";
import NewProducts from "./NewProducts";
import Footer from "./Footer";
import LoginPage from "./LoginPage";
import Store from "./Store";
import Navbar from "./Navbar";
import NavbarBgImg from "../images/store-bg.jpg";
import AdminPage from "./AdminPage";
import Cart from "./Cart";
import UserSettings from "./UserSettings";
import { STORE_CONFIG } from "../queries";

const App = () => {
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);
  const result = useQuery(STORE_CONFIG);

  useEffect(() => {
    const userLocalStorageToken = localStorage.getItem(
      "myecommercestore-user-token"
    );
    userLocalStorageToken && setToken(userLocalStorageToken);
  }, []);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const logout = () => {
    setToken(null);
    localStorage.clear();
  };

  const { categories, filters, newProducts } = result.data.store;

  const addToCart = (product) => {
    let cartCopy = [...cart];
    let p = cartCopy.find((p) => p.id === product.id);

    if (!p) {
      setCart([...cartCopy, { ...product, quantity: 1 }]);
    } else {
      p.quantity += 1;
      setCart(cartCopy);
    }
  };

  return (
    <AuthContext.Provider value={token}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/settings">
            <Navbar token={token} bgImg={NavbarBgImg} />
            <UserSettings />
          </Route>
          <Route path="/cart">
            <Navbar token={token} bgImg={NavbarBgImg} />
            <Cart cart={cart} setCart={setCart} />
          </Route>
          <Route path="/login">
            <LoginPage token={token} setToken={setToken} />
          </Route>
          <Route path="/store">
            <Navbar token={token} bgImg={NavbarBgImg} />
            <Store
              addToCart={addToCart}
              categories={categories}
              filters={filters}
            />
          </Route>
          <Route path="/">
            <Hero token={token} />
            <NewProducts products={newProducts} addToCart={addToCart} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
