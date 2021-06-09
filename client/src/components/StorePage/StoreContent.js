import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { FILTERED_PRODUCTS } from "../../queries";
import { useParams } from "react-router-dom";
import {
  NextPageContainer,
  StoreProducsContainer,
  NextPageButton,
  StoreProductItem,
  StoreContentContainer,
} from "./StoreElements";

const StoreContent = ({ addToCart }) => {
  const filter = useParams();
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

export default StoreContent;
