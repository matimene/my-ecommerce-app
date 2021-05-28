import React from "react";
import { useQuery } from "@apollo/client";
import { PRODUCTS } from "../../queries";

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

const Store = () => {
  const result = useQuery(PRODUCTS);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const addToCart = (product) => {
    console.log(product);
  };

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
          {result.data.products.map((p, i) => (
            <StoreProductItem key={i} product={p} addToCart={addToCart} />
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
