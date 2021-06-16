import React from "react";
import {
  useQuery,
  useMutation,
  useSubscription,
  useApolloClient,
} from "@apollo/client";
import { ORDERS, ORDER_ADDED, UPDATE_ORDER_STATUS } from "../../queries";
import {
  OrdersContainer,
  OrderCardContainer,
  OrderStatus,
  OrderLine,
  OrderLineProducts,
} from "./AdminPageElements";

const OrdersAdmin = ({ page }) => {
  const resultOrders = useQuery(ORDERS);
  const [updateOrderStatus] = useMutation(UPDATE_ORDER_STATUS, {
    refetchQueries: [{ query: ORDERS }],
    onError: (error) => {
      window.alert(error.graphQLErrors[0].message);
    },
  });
  const client = useApolloClient();

  const updateCacheWith = (addedOrder) => {
    const includedIn = (set, object) =>
      set.map((p) => p.id).includes(object.id);

    const dataInStore = client.readQuery({ query: ORDERS });
    if (!includedIn(dataInStore.orders, addedOrder)) {
      client.writeQuery({
        query: ORDERS,
        data: { orders: dataInStore.orders.concat(addedOrder) },
      });
    }
  };

  useSubscription(ORDER_ADDED, {
    onSubscriptionData: ({ subscriptionData }) => {
      const addedOrder = subscriptionData.data.orderAdded;
      console.log("addedOrder", subscriptionData);
      console.log("addedOrder", addedOrder);
      updateCacheWith(addedOrder);
    },
  });

  if (page === "orders" && resultOrders.loading) {
    return <div>Loading...</div>;
  }

  const changeOrderStatus = async ({ id, status }) => {
    try {
      await updateOrderStatus({
        variables: {
          id: id,
          status: status,
        },
      });
    } catch (e) {
      window.alert(e);
    }
  };

  return (
    <OrdersContainer>
      {[...resultOrders.data.orders].reverse().map((order, i) => {
        return (
          <OrderCardContainer key={i} status={order.status}>
            <OrderStatus status={order.status}>{order.status}</OrderStatus>
            <OrderLineProducts>
              {order.items.map((item, z) => {
                return (
                  <div key={z}>
                    {item.name} x{item.quantity}
                  </div>
                );
              })}
            </OrderLineProducts>
            <OrderLine>
              NOTES: {order.notes ? order.notes : "Nothing"}
            </OrderLine>
            <OrderLine>
              By {order.deliveryInfo.name} - {order.deliveryInfo.phone}, at "
              {order.deliveryInfo.adress}"
            </OrderLine>
            <select
              name="orderStatus"
              id="status"
              onChange={(e) =>
                changeOrderStatus({ id: order.id, status: e.target.value })
              }
            >
              <option value="" selected disabled hidden>
                CHANGE ORDER STATUS
              </option>
              <option value="PENDING">Pending</option>
              <option value="SHIPPED">Shipped</option>
              <option value="COMPLETED">Completed</option>
              <option value="CANCELED">Canceled</option>
            </select>
          </OrderCardContainer>
        );
      })}
    </OrdersContainer>
  );
};

export default OrdersAdmin;
