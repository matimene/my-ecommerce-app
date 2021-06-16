import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_PRODUCT, PRODUCTS } from "../../../queries";
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

const EditProductForm = ({ product, setProductToEdit }) => {
  const [hideForm, setHideForm] = useState(false);
  const [name, setName] = useState(product.name);
  const [imgUrl, setImgUrl] = useState(product.imgUrl);
  const [category, setCategory] = useState(product.category);
  const [subCategories, setSubCategories] = useState(product.subCategories);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [skuCode, setSkuCode] = useState(product.skuCode);

  const [updateProduct] = useMutation(UPDATE_PRODUCT, {
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
    update: (store, response) => {
      console.log(response);
      const dataInStore = store.readQuery({ query: PRODUCTS });
      store.writeQuery({
        query: PRODUCTS,
        data: {
          ...dataInStore,
          products: [...dataInStore.products].map((product) =>
            product.id === response.data.updateProduct.id
              ? response.data.updateProduct
              : product
          ),
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

  const cancelSubmit = () => {
    setProductToEdit(null);
    setHideForm(true);
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
        await updateProduct({
          variables: {
            id: product.id,
            name,
            imgUrl,
            category,
            subCategories: parseSubcategories(subCategories),
            price: parseFloat(price),
            description,
            skuCode,
          },
        });
        setHideForm(true);
        setName("");
        setImgUrl("");
        setCategory("");
        setSubCategories("");
        setPrice(0);
        setDescription("");
        setSkuCode("");
        setProductToEdit(null);
      } catch (e) {
        window.alert(e);
      }
    } else {
      window.alert("Form incompleted! Fill it up!");
    }
  };

  return (
    !hideForm && (
      <FormContainer>
        <FormNP onSubmit={handleSubmit}>
          <h1>Edit product data</h1>
          <FormNPItemContainer>
            <FormNPLabel>product name:</FormNPLabel>
            <FormNPInput
              placeholder={name}
              onChange={({ target }) => setName(target.value)}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Image url:</FormNPLabel>
            <FormNPInput
              placeholder={imgUrl}
              onChange={({ target }) => setImgUrl(target.value)}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Main category</FormNPLabel>
            <FormNPInput
              placeholder={category}
              onChange={({ target }) => setCategory(target.value)}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>
              Subcategories (enter them separated by a "/" and no spaces.
            </FormNPLabel>
            <FormNPLabel>Ex: choco/extra-cheese/smt</FormNPLabel>
            <FormNPInput
              placeholder={subCategories.join("/")}
              onChange={({ target }) => setSubCategories(target.value)}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Price (Ex: 1.99)</FormNPLabel>
            <FormNPInput
              placeholder={price}
              onChange={({ target }) => setPrice(target.value)}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Description</FormNPLabel>
            <FormNPTextArea
              placeholder={description}
              onChange={({ target }) => setDescription(target.value)}
            />
          </FormNPItemContainer>
          <FormNPItemContainer>
            <FormNPLabel>Skucode (internal code):</FormNPLabel>
            <FormNPInput
              placeholder={skuCode}
              onChange={({ target }) => setSkuCode(target.value)}
            />
          </FormNPItemContainer>
          <AddNewProductButtonContainer>
            <AddNewProductFormButton type="submit">
              edit
            </AddNewProductFormButton>
          </AddNewProductButtonContainer>
        </FormNP>
        <AddNewProductButtonContainer>
          <AddNewProductFormButton onClick={() => cancelSubmit()}>
            cancel
          </AddNewProductFormButton>
        </AddNewProductButtonContainer>
      </FormContainer>
    )
  );
};

export default EditProductForm;
