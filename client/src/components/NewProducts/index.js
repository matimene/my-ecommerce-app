import React from "react";
import {
  NewProductsTitle,
  NewProductsTitleContainer,
  NewProductsContainer,
  NewProductsWrapper,
} from "./NewProductsElements";
import { StoreProductItem } from "../Store/StoreElements";

const NewProducts = ({ products, addToCart }) => {
  return (
    <>
      <NewProductsTitleContainer>
        <NewProductsTitle>NEW PRODUCTS</NewProductsTitle>
      </NewProductsTitleContainer>
      <NewProductsContainer>
        {products.map((p, i) => (
          <NewProductsWrapper key={i}>
            <StoreProductItem product={p} addToCart={() => addToCart(p)} />
          </NewProductsWrapper>
        ))}
      </NewProductsContainer>
    </>
  );
};

export default NewProducts;
