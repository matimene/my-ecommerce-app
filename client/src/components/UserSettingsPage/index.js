import React from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ME } from "../../queries";

import UserData from "./UserData";
import UserOrders from "./UserOrders";
import Navbar from "../Navbar";
import NavbarBgImg from "../../images/store-bg.jpg";
import {
  UserSettingsPageContainer,
  UserSettingsLogoutButton,
  UserSettingsLogoutButtonContainer,
} from "./UserSettingsElements";

const UserSettingsPage = ({ logout, token }) => {
  const history = useHistory();

  const result = useQuery(ME);

  if (result.loading) {
    return <div>loading...</div>;
  }

  const { info, orders } = result.data.me;

  const logoutUser = () => {
    logout();
    history.push("/");
  };

  return (
    <>
      <Navbar token={token} bgImg={NavbarBgImg} />
      <UserSettingsPageContainer>
        <UserData info={info} />
        <UserOrders orders={orders} />
        <UserSettingsLogoutButtonContainer>
          <UserSettingsLogoutButton onClick={() => logoutUser()}>
            logout
          </UserSettingsLogoutButton>
        </UserSettingsLogoutButtonContainer>
      </UserSettingsPageContainer>
    </>
  );
};

export default UserSettingsPage;
