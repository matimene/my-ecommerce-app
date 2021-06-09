import React, { useState } from "react";
import { CatFilContainer, SectionButton } from "./StoreConfigElements";

const AddNewForm = ({ addNew }) => {
  const [newTerm, setNewTerm] = useState("");

  const handleAdd = () => {
    if (newTerm.length > 3) {
      addNew(newTerm);
    }
  };

  return (
    <CatFilContainer>
      Add new: <input onChange={(e) => setNewTerm(e.target.value)} />
      <SectionButton color={"#00FF00"} onClick={() => handleAdd()}>
        add
      </SectionButton>
    </CatFilContainer>
  );
};

export default AddNewForm;
