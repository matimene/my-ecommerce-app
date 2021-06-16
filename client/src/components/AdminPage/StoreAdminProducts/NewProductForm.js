import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT, PRODUCTS } from "../../../queries";
import {
  AddNewProductFormButton,
  AddNewProductButtonContainer,
  FormContainer,
  FormNP,
  FormNPLabel,
  FormNPItemContainer,
  FormNPInput,
  FormNPTextArea,
} from "./StoreAdminProductsElements";

const NewProductForm = ({ show, setShowForm }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("");
  const [subCategories, setSubCategories] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [skuCode, setSkuCode] = useState("");

  const [createProduct] = useMutation(CREATE_PRODUCT, {
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
    update: (store, response) => {
      const dataInStore = store.readQuery({ query: PRODUCTS });
      store.writeQuery({
        query: PRODUCTS,
        data: {
          ...dataInStore,
          products: [...dataInStore.products, response.data.createProduct],
        },
      });
    },
  });

  const parseSubcategories = (subCats) => {
    if (subCats.length > 1) {
      return subCats.split("/");
    } else {
      return subCats;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (subCategories.indexOf(" ") >= 0) {
      return window.alert(
        "Subcategories mal formatted! Separate them by a coma `,` with no spaces"
      );
    }

    if (
      name ||
      imgUrl ||
      category ||
      subCategories ||
      price ||
      description ||
      skuCode
    ) {
      try {
        await createProduct({
          variables: {
            name,
            imgUrl,
            category,
            subCategories: parseSubcategories(subCategories),
            price: parseFloat(price),
            description,
            skuCode,
          },
        });
        setShowForm(false);
        setName("");
        setImgUrl("");
        setCategory("");
        setSubCategories("");
        setPrice(0);
        setDescription("");
        setSkuCode("");
      } catch (e) {
        window.alert(e);
      }
    } else {
      window.alert("Form incompleted! Fill it up!");
    }
  };

  return (
    show && (
      <FormContainer>
        <FormNP onSubmit={handleSubmit}>
          <FormNPItemContainer>
            <FormNPLabel>product name:</FormNPLabel>
            <FormNPInput onChange={({ target }) => setName(target.value)} />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Image url:</FormNPLabel>
            <FormNPInput onChange={({ target }) => setImgUrl(target.value)} />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Main category</FormNPLabel>
            <FormNPInput onChange={({ target }) => setCategory(target.value)} />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>
              Subcategories (enter them separated by a "/" and no spaces.
            </FormNPLabel>
            <FormNPLabel>Ex: choco/extra-cheese/smt</FormNPLabel>
            <FormNPInput
              onChange={({ target }) => setSubCategories(target.value)}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Price (Ex: 1.99)</FormNPLabel>
            <FormNPInput onChange={({ target }) => setPrice(target.value)} />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Description</FormNPLabel>
            <FormNPTextArea
              onChange={({ target }) => setDescription(target.value)}
              rows={3}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Skucode (internal code):</FormNPLabel>
            <FormNPInput onChange={({ target }) => setSkuCode(target.value)} />
          </FormNPItemContainer>
          <AddNewProductButtonContainer>
            <AddNewProductFormButton type="submit">add</AddNewProductFormButton>
          </AddNewProductButtonContainer>
        </FormNP>
      </FormContainer>
    )
  );
};

export default NewProductForm;
