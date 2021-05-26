import React from "react";
import ProductCard from "../ProductCard";
import {
  NewProductsTitle,
  NewProductsTitleContainer,
} from "./NewProductsElements";
import { ProductsContainer } from "../ProductCard/ProductCardElements";

const NewProducts = ({ products }) => {
  return (
    <>
      <NewProductsTitleContainer>
        <NewProductsTitle>New products</NewProductsTitle>
      </NewProductsTitleContainer>
      <ProductsContainer>
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default NewProducts;
