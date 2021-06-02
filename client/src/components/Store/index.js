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

const Store = ({ addToCart, categories, filters }) => {
  const result = useQuery(PRODUCTS);

  if (result.loading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <StoreContainer>
        <StorePanelContainer>
          <PanelItemContainer>
            <PanelHeader>Menu</PanelHeader>
            {categories.map((c, i) => (
              <PanelCategory key={i}>{c}</PanelCategory>
            ))}
            <PanelCategory>All</PanelCategory>
          </PanelItemContainer>
          <PanelItemContainer>
            <PanelHeader>Filter by</PanelHeader>
            {filters.map((f, i) => (
              <PanelFilterCategoryElement
                key={i}
                setFilter={console.log}
                value={f}
              />
            ))}
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
