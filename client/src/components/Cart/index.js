import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER, ME } from "../../queries";

import { CartContainer, OrderPlaced } from "./CartElements";
import CartConfirm from "./CartConfirm";
import AdressForm from "./AdressForm";

const Cart = ({ cart, setCart }) => {
  const [firstStepCompleted, setFirstStepCompleted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const history = useHistory();

  const [createOrder] = useMutation(CREATE_ORDER, {
    refetchQueries: [{ query: ME }],
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
  });

  const placeOrder = async (values) => {
    if (cart.length !== 0) {
      const { adress, name, phone, notes } = values;

      try {
        await createOrder({
          variables: {
            items: cart.map((product) => ({
              id: product.id,
              quantity: product.quantity,
            })),
            deliveryInfo: { name, adress, phone },
            notes,
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
  if (orderPlaced) return <OrderPlaced>¡Order sucessfully placed!</OrderPlaced>;

  return (
    <CartContainer>
      {!firstStepCompleted ? (
        <CartConfirm
          cart={cart}
          setCart={setCart}
          setCompleted={setFirstStepCompleted}
        />
      ) : (
        <AdressForm handleSubmit={placeOrder} />
      )}
    </CartContainer>
  );
};

export default Cart;
