import React from "react";

import {
  CartTable,
  CartTableHeader,
  CartTableCell,
  CartTableCellTotalPrice,
  CartDeleteItemButton,
  PlaceOrderButton,
  CartButtonContainer,
  CartTableCellCentered,
  CartTableHeaderCentered,
} from "./CartElements";

const CartConfirm = ({ cart, setCart, setCompleted }) => {
  const getTotalPrice = () => {
    const total = cart
      .map((i) => i.quantity * i.price)
      .reduce((a, b) => a + b, 0);
    return Math.round(total * 100) / 100;
  };

  const filterCart = (id) => {
    setCart([...cart].filter((product) => product.id !== id));
  };

  return (
    <>
      <CartTable>
        <thead>
          <tr>
            <CartTableHeader>name</CartTableHeader>
            <CartTableHeaderCentered>price</CartTableHeaderCentered>
            <CartTableHeaderCentered>qty</CartTableHeaderCentered>
            <CartTableHeaderCentered>del</CartTableHeaderCentered>
          </tr>
        </thead>
        <tbody>
          {cart.length ? (
            cart.map((p, i) => {
              return (
                <tr key={i}>
                  <CartTableCell>{p.name}</CartTableCell>
                  <CartTableCellCentered>{p.price} €</CartTableCellCentered>
                  <CartTableCellCentered>{p.quantity} u.</CartTableCellCentered>
                  <CartTableCell>
                    <CartButtonContainer>
                      <CartDeleteItemButton onClick={() => filterCart(p.id)}>
                        x
                      </CartDeleteItemButton>
                    </CartButtonContainer>
                  </CartTableCell>
                </tr>
              );
            })
          ) : (
            <tr>
              <CartTableCellTotalPrice colSpan="4">
                Add items to your cart to start
              </CartTableCellTotalPrice>
            </tr>
          )}
          <tr>
            <CartTableCellTotalPrice colSpan="4">
              total: {getTotalPrice()} €
            </CartTableCellTotalPrice>
          </tr>
        </tbody>
      </CartTable>
      <CartButtonContainer>
        <PlaceOrderButton onClick={() => setCompleted(true)}>
          Continue
        </PlaceOrderButton>
      </CartButtonContainer>
    </>
  );
};

export default CartConfirm;
