import React, { useState } from "react";
import {
  CartContainer,
  CartTable,
  CartTableHeader,
  CartTableCell,
  CartTableCellTotalPrice,
  CartDeleteItemButton,
  PlaceOrderButton,
  CartButtonContainer,
  CartTableCellCentered,
  CartTableHeaderCentered,
  OrderPlaced,
} from "./CartElements";
import { useHistory } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();

  const getTotalPrice = () => {
    const total = cart
      .map((i) => i.quantity * i.price)
      .reduce((a, b) => a + b, 0);
    return Math.round(total * 100) / 100;
  };

  const placeOrder = () => {
    if (cart.length) {
      setOrderPlaced(true);
      setCart([]);
      setTimeout(function () {
        history.push("/");
      }, 2500);
    }
  };

  if (orderPlaced) return <OrderPlaced>¡Order sucessfully placed!</OrderPlaced>;

  return (
    <CartContainer>
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
                      <CartDeleteItemButton>x</CartDeleteItemButton>
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
        <PlaceOrderButton onClick={() => placeOrder()}>
          Place order
        </PlaceOrderButton>
      </CartButtonContainer>
    </CartContainer>
  );
};

export default Cart;
