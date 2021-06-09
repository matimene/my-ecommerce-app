import React from "react";
import {
  UserSettingsH1,
  OrdersContainer,
  OrderContainer,
  OrderStatusDiv,
} from "./UserSettingsElements";

const UserOrders = ({ orders }) => {
  return (
    <>
      <UserSettingsH1>orders</UserSettingsH1>
      <OrdersContainer>
        {orders.map((order, i) => {
          return (
            <OrderContainer key={i} status={order.status}>
              <OrderStatusDiv status={order.status}>
                STATUS: {order.status}
              </OrderStatusDiv>
              {order.items.map((item, i) => {
                return (
                  <div key={i}>
                    {item.name} x {item.quantity}
                  </div>
                );
              })}
              <div>TOTAL: {order.total} €</div>
            </OrderContainer>
          );
        })}
      </OrdersContainer>
    </>
  );
};

export default UserOrders;
