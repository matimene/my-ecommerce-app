import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../../queries";

import { AdminPageContainer } from "./AdminPageElements";
import Navigation from "./Navigation";
import OrdersAdmin from "./OrdersAdmin";
import StoreConfig from "./StoreConfig";

const AdminPage = () => {
  const [page, setPage] = useState("orders");
  const resultMe = useQuery(ME);

  if (resultMe.loading || !resultMe.data.me.isAdmin) {
    return null;
  }

  const renderAdminPage = () => {
    switch (page) {
      case "orders":
        return <OrdersAdmin page={page} />;
      case "storeConfig":
        return <StoreConfig page={page} />;
      case "products":
        return null;
      default:
        return <OrdersAdmin page={page} />;
    }
  };

  return (
    <AdminPageContainer>
      <Navigation page={page} setPage={setPage} />
      {renderAdminPage()}
    </AdminPageContainer>
  );
};

export default AdminPage;
