import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ME } from "../../queries";

import { AdminPageContainer } from "./AdminPageElements";
import Navigation from "./Navigation";
import OrdersAdmin from "./OrdersAdmin";

const AdminPage = () => {
  const [page, setPage] = useState("orders");
  const resultMe = useQuery(ME);

  if (resultMe.loading || !resultMe.data.me.isAdmin) {
    return null;
  }

  return (
    <AdminPageContainer>
      <Navigation page={page} setPage={setPage} />
      <OrdersAdmin page={page} />
    </AdminPageContainer>
  );
};

export default AdminPage;
