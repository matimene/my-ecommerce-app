import React, { useState } from "react";
import StoreTable from "./StoreTable";
import AddNewProduct from "./AddNewProduct";
import EditProductForm from "./EditProductForm";
import { PageContainer, Title } from "./StoreAdminProductsElements";

const StoreAdminProducts = () => {
  const [productToEdit, setProductToEdit] = useState(null);

  return (
    <PageContainer>
      <Title>Store products</Title>
      <AddNewProduct />
      {productToEdit && (
        <EditProductForm
          product={productToEdit}
          setProductToEdit={setProductToEdit}
        />
      )}
      <StoreTable setProductToEdit={setProductToEdit} />
    </PageContainer>
  );
};

export default StoreAdminProducts;
