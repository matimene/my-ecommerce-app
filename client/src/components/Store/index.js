import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import { FILTERED_PRODUCTS } from "../../queries";

import {
  NextPageContainer,
  PanelItemContainer,
  PanelStoreFilter,
  PanelHeader,
  StoreContainer,
  StorePanelContainer,
  StoreProducsContainer,
  NextPageButton,
  PanelStoreFilterAll,
  StoreProductItem,
  StoreContentContainer,
} from "./StoreElements";

const Store = ({ addToCart, categories, filters }) => {
  const filter = useParams();
  const history = useHistory();
  const [page, setPage] = useState(1);
  const result = useQuery(FILTERED_PRODUCTS, {
    variables: { filter: filter.filter },
  });

  if (result.loading) {
    return "Loading...";
  } else if (result.error) {
    return "There was an error :(";
  }

  const changePage = (controller) => {
    if (controller === "prev") {
      setPage(page - 1);
    }
    if (controller === "next") {
      setPage(page + 1);
    }
  };

  const renderStoreContent = () => {
    const showAccordingPageNumber = (array) => {
      let first = (page - 1) * 12;
      let last = page * 12;
      return array.slice(first, last);
    };

    const productsToRender = showAccordingPageNumber(result.data.products);

    let maxPages = Math.ceil(productsToRender.length / 12);

    return (
      <StoreContentContainer>
        <StoreProducsContainer>
          {productsToRender.map((p, i) => (
            <StoreProductItem key={i} product={p} addToCart={addToCart} />
          ))}
        </StoreProducsContainer>
        <NextPageContainer>
          {page !== 1 && (
            <NextPageButton onClick={() => changePage("prev")}>
              {"<"}
            </NextPageButton>
          )}
          <NextPageButton>{page}</NextPageButton>
          {page === maxPages && (
            <NextPageButton onClick={() => changePage("next")}>
              {">"}
            </NextPageButton>
          )}
        </NextPageContainer>
      </StoreContentContainer>
    );
  };

  return (
    <>
      <StoreContainer>
        <StorePanelContainer>
          <PanelItemContainer>
            <PanelHeader>Menu</PanelHeader>
            {categories.map((c, i) => (
              <PanelStoreFilter
                onClick={() => history.push(`/store/${c}`)}
                key={i}
              >
                {c}
              </PanelStoreFilter>
            ))}
            <PanelStoreFilterAll onClick={() => history.push(`/store`)}>
              SHOW ALL
            </PanelStoreFilterAll>
          </PanelItemContainer>
          <PanelItemContainer>
            <PanelHeader>Filter by</PanelHeader>
            {filters.map((f, i) => (
              <PanelStoreFilter
                key={i}
                onClick={() => history.push(`/store/${f}`)}
              >
                {f}
              </PanelStoreFilter>
            ))}
            <PanelStoreFilterAll onClick={() => history.push(`/store`)}>
              SHOW ALL
            </PanelStoreFilterAll>
          </PanelItemContainer>
        </StorePanelContainer>
        {renderStoreContent()}
      </StoreContainer>
    </>
  );
};

export default Store;
