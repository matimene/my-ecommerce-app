import React from "react";
import StoreContent from "./StoreContent";
import Navbar from "../Navbar";
import StorePanel from "./StorePanel";
import { StoreContainer } from "./StoreElements";
import NavbarBgImg from "../../images/store-bg.jpg";

const Store = ({ addToCart, categories, filters, token }) => {
  return (
    <>
      <Navbar token={token} bgImg={NavbarBgImg} />
      <StoreContainer>
        <StorePanel categories={categories} filters={filters} />
        <StoreContent addToCart={addToCart} />
      </StoreContainer>
    </>
  );
};

export default Store;
