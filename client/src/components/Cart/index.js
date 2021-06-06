import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_ORDER, ME } from "../../queries";

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

const Cart = ({ cart, setCart }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();

  const { data, loading } = useQuery(ME);
  const [createOrder] = useMutation(CREATE_ORDER, {
    refetchQueries: [{ query: ME }],
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
  });

  const getTotalPrice = () => {
    const total = cart
      .map((i) => i.quantity * i.price)
      .reduce((a, b) => a + b, 0);
    return Math.round(total * 100) / 100;
  };

  const placeOrder = async () => {
    if (cart.length !== 0) {
      const { info } = data.me;
      const { adress, name, phone } = info;

      if (!adress || !name || !phone) {
        return window.alert("COMPLETE YOUR DELIVERY INFO ON USER SETTINGS");
      }

      try {
        await createOrder({
          variables: {
            items: cart.map((product) => ({
              id: product.id,
              quantity: product.quantity,
            })),
          },
        });
        setOrderPlaced(true);
        setCart([]);
        setTimeout(function () {
          history.push("/settings");
        }, 2500);
      } catch (e) {
        window.alert(e);
      }
    }
  };

  const renderSecondStep = () => {};

  const filterCart = (id) => {
    setCart([...cart].filter((product) => product.id !== id));
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
        <PlaceOrderButton onClick={() => placeOrder()}>
          Place order
        </PlaceOrderButton>
      </CartButtonContainer>
    </CartContainer>
  );
};

export default Cart;
