import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
  STORE_CONFIG,
  SET_NEW_PRODUCTS,
  SET_CATEGORIES,
  SET_FILTERS,
} from "../../../queries";
import {
  StoreConfigContainer,
  StoreConfigSectionContainer,
  SectionTitle,
  SectionLabel,
  CatFilContainer,
  SectionButton,
} from "./StoreConfigElements";
import AddNew from "./AddNewForm";
import NewProductUpdate from "./NewProductUpdate";

const StoreConfig = ({ page }) => {
  const resultConfig = useQuery(STORE_CONFIG);

  const [changeNewProducts] = useMutation(SET_NEW_PRODUCTS, {
    refetchQueries: [{ query: STORE_CONFIG }],
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
  });
  const [changeCategories] = useMutation(SET_CATEGORIES, {
    refetchQueries: [{ query: STORE_CONFIG }],
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
  });
  const [changeFilters] = useMutation(SET_FILTERS, {
    refetchQueries: [{ query: STORE_CONFIG }],
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
  });

  if (page === "storeConfig" && resultConfig.loading) {
    return <div>Loading...</div>;
  }

  const { store } = resultConfig.data;
  console.log(store);

  const deleteCategory = async (category) => {
    if (
      window.confirm(
        `Do you really want to delete "${category}" as a main category?`
      )
    ) {
      await changeCategories({
        variables: {
          categories: store.categories.filter((cat) => cat !== category),
        },
      });
    }
  };

  const addCategory = async (category) => {
    if (
      window.confirm(
        `Do you really want to add "${category}" as a main category?`
      )
    ) {
      await changeCategories({
        variables: {
          categories: store.categories.concat(category),
        },
      });
    }
  };

  const deleteFilter = async (filter) => {
    if (
      window.confirm(
        `Do you really want to delete "${filter}" as a store filter subcategory?`
      )
    ) {
      await changeFilters({
        variables: {
          filters: store.filters.filter((f) => f !== filter),
        },
      });
    }
  };

  const addFilter = async (filter) => {
    if (
      window.confirm(
        `Do you really want to add "${filter}" as a store filter subcategory?`
      )
    ) {
      await changeFilters({
        variables: {
          filters: store.filters.concat(filter),
        },
      });
    }
  };

  const updateNewProduct = async ({ i, skuCode }) => {
    const newProducts = store.newProducts;
    if (
      window.confirm("Do you really want to change the NewProducts product?")
    ) {
      let newNewProducts = newProducts.map((product) => product.skuCode);
      newNewProducts[i] = skuCode;

      await changeNewProducts({
        variables: {
          newProducts: newNewProducts,
        },
      });
    }
  };

  return (
    <StoreConfigContainer>
      <StoreConfigSectionContainer>
        <SectionTitle>Menu categories</SectionTitle>
        {store.categories.map((cat, i) => {
          return (
            <CatFilContainer key={i}>
              <SectionLabel>{cat}</SectionLabel>
              <SectionButton
                color={"#e31837"}
                onClick={() => deleteCategory(cat)}
              >
                delete
              </SectionButton>
            </CatFilContainer>
          );
        })}
        <AddNew addNew={addCategory} />
      </StoreConfigSectionContainer>
      <StoreConfigSectionContainer>
        <SectionTitle>Menu filters (subcategories)</SectionTitle>
        {store.filters.map((subCat, i) => {
          return (
            <CatFilContainer key={i}>
              <SectionLabel>{subCat}</SectionLabel>
              <SectionButton
                color={"#e31837"}
                onClick={() => deleteFilter(subCat)}
              >
                delete
              </SectionButton>
            </CatFilContainer>
          );
        })}
        <AddNew addNew={addFilter} />
      </StoreConfigSectionContainer>
      <StoreConfigSectionContainer>
        <SectionTitle>New products (by skuCode)</SectionTitle>
        {store.newProducts.map((product, i) => {
          return (
            <NewProductUpdate
              product={product}
              key={i}
              index={i}
              update={updateNewProduct}
            />
          );
        })}
      </StoreConfigSectionContainer>
    </StoreConfigContainer>
  );
};

export default StoreConfig;
