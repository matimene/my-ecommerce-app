import React from "react";
import {
  NextPageContainer,
  PanelItemContainer,
  PanelCategory,
  PanelHeader,
  StoreContainer,
  StorePanelContainer,
  StoreProducsContainer,
  PanelFilterCategoryElement,
  NextPageButton,
  StoreProductItem,
} from "./StoreElements";
import ProductCard from "../ProductCard";
import ProductImg from "../../images/product-2.jpg";
import ProductImg2 from "../../images/product-1.jpg";
import ProductImg3 from "../../images/product-3.jpg";

const Store = () => {
  const products = [
    { img: ProductImg, name: "Pizza", price: 9.95 },
    { img: ProductImg2, name: "Pizza", price: 9.95 },
    { img: ProductImg3, name: "Pizza", price: 9.95 },
    { img: ProductImg, name: "Pizza", price: 9.95 },
    { img: ProductImg2, name: "Pizza", price: 9.95 },
    { img: ProductImg3, name: "Pizza", price: 9.95 },
    { img: ProductImg, name: "Pizza", price: 9.95 },
    { img: ProductImg2, name: "Pizza", price: 9.95 },
    { img: ProductImg, name: "Pizza", price: 9.95 },
    { img: ProductImg3, name: "Pizza", price: 9.95 },
    { img: ProductImg, name: "Pizza", price: 9.95 },
    { img: ProductImg2, name: "Pizza", price: 9.95 },
    { img: ProductImg, name: "Pizza", price: 9.95 },
    { img: ProductImg3, name: "Pizza", price: 9.95 },
    { img: ProductImg2, name: "Pizza", price: 9.95 },
  ];

  return (
    <>
      <StoreContainer>
        <StorePanelContainer>
          <PanelItemContainer>
            <PanelHeader>Menu</PanelHeader>
            <PanelCategory>Pizzas</PanelCategory>
            <PanelCategory>Deserts</PanelCategory>
            <PanelCategory>All</PanelCategory>
          </PanelItemContainer>
          <PanelItemContainer>
            <PanelHeader>Filter by</PanelHeader>
            <PanelFilterCategoryElement
              setFilter={console.log}
              value={"cheese"}
            />
            <PanelFilterCategoryElement
              setFilter={console.log}
              value={"chocolate"}
            />
            <PanelFilterCategoryElement
              setFilter={console.log}
              value={"lube"}
            />
          </PanelItemContainer>
        </StorePanelContainer>
        <StoreProducsContainer>
          {products.map((p, i) => (
            <StoreProductItem key={i} product={p} />
          ))}
        </StoreProducsContainer>
      </StoreContainer>
      <NextPageContainer>
        <NextPageButton>{"<"}</NextPageButton>
        <NextPageButton>1</NextPageButton>
        <NextPageButton>{">"}</NextPageButton>
      </NextPageContainer>
    </>
  );
};

export default Store;
