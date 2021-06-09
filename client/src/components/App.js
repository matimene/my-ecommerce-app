import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { useQuery } from "@apollo/client";
import { STORE_CONFIG } from "../queries";
import { AuthContext } from "../context";

import Hero from "./HomePage";
import NewProducts from "./NewProducts";
import LoginPage from "./LoginPage";
import StorePage from "./StorePage";
import AdminPage from "./AdminPage";
import CartPage from "./CartPage";
import UserSettingsPage from "./UserSettingsPage";
import Footer from "./Footer";

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
    return null;
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
            <UserSettingsPage logout={logout} token={token} />
          </Route>
          <Route path="/cart">
            <CartPage cart={cart} setCart={setCart} token={token} />
          </Route>
          <Route path="/login">
            <LoginPage token={token} setToken={setToken} />
          </Route>
          <Route path="/store/:filter">
            <StorePage
              addToCart={addToCart}
              categories={categories}
              filters={filters}
              token={token}
            />
          </Route>
          <Route path="/store">
            <StorePage
              addToCart={addToCart}
              categories={categories}
              filters={filters}
              token={token}
            />
          </Route>
          <Route path="/">
            <Hero token={token} categories={categories} />
            <NewProducts products={newProducts} addToCart={addToCart} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
