import React from "react";
import { NavigationContainer, NavigationItem } from "./AdminPageElements";

const Navigation = ({ page, setPage }) => {
  return (
    <NavigationContainer>
      <NavigationItem
        active={page === "orders" ? true : false}
        onClick={() => setPage("orders")}
      >
        Orders
      </NavigationItem>
      <NavigationItem
        active={page === "storeConfig" ? true : false}
        onClick={() => setPage("storeConfig")}
      >
        Store config
      </NavigationItem>
      <NavigationItem
        active={page === "products" ? true : false}
        onClick={() => setPage("products")}
      >
        Products
      </NavigationItem>
    </NavigationContainer>
  );
};

export default Navigation;
