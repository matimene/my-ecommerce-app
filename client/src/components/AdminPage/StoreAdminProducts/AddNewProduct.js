import React, { useState } from "react";
import NewProductForm from "./NewProductForm";
import {
  AddNewProductButtonContainer,
  AddNewProductButton,
} from "./StoreAdminProductsElements";

const AddNewProduct = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <AddNewProductButtonContainer>
        <AddNewProductButton onClick={() => setShowForm(!showForm)}>
          {showForm ? "cancel" : "add new product"}
        </AddNewProductButton>
      </AddNewProductButtonContainer>
      <NewProductForm show={showForm} setShowForm={setShowForm} />
    </>
  );
};

export default AddNewProduct;
