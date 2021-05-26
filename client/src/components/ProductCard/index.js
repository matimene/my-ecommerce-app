import React from "react";
import {
  ProductButton,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductPrice,
  ProductWrapper,
} from "./ProductCardElements";

const ProductCardItem = ({ product }) => {
  return (
    <ProductWrapper>
      <ProductCard>
        <ProductImg src={product.img} />
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice>${product.price}</ProductPrice>
        <ProductButton>Add to cart</ProductButton>
      </ProductCard>
    </ProductWrapper>
  );
};

export default ProductCardItem;
