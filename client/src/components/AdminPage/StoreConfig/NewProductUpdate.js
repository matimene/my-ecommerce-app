import React, { useState } from "react";
import {
  SectionLabel,
  CatFilContainer,
  SectionButton,
} from "./StoreConfigElements";

const NewProductUpdate = ({ update, product, index }) => {
  const [newSkuCode, setNewSkuCode] = useState("");

  return (
    <div>
      <SectionLabel>
        {index + 1}: {product.name}
      </SectionLabel>
      <CatFilContainer>
        skuCode:{" "}
        <input
          onChange={(e) => setNewSkuCode(e.target.value)}
          placeholder={product.skuCode}
        />
        <SectionButton
          color={"#ffc500"}
          onClick={() => update({ index, newSkuCode })}
        >
          update
        </SectionButton>
      </CatFilContainer>
    </div>
  );
};

export default NewProductUpdate;
