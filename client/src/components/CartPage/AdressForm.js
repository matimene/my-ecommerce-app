import React, { useState } from "react";
import {
  FormWrapper,
  Form,
  FormTitle,
  FormInput,
  FormTextArea,
  PlaceOrderButton,
} from "./CartElements";

const AdressForm = ({ handleSubmit }) => {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (name && adress && phone) {
      handleSubmit({ name, adress, phone, notes });
    } else {
      window.alert("Complete your info to continue");
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleFormSubmit}>
        <FormTitle>Delivery info</FormTitle>
        <label>Name</label>
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Adress</label>
        <FormInput
          type="text"
          name="adress"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
        <label>Phone</label>
        <FormInput
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label>Notes:</label>
        <FormTextArea
          type="textarea"
          onChange={(e) => setNotes(e.target.value)}
        />
        <PlaceOrderButton type="submit">¡Place order!</PlaceOrderButton>
      </Form>
    </FormWrapper>
  );
};

export default AdressForm;
