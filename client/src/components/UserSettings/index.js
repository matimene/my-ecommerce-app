import React from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../../queries";
import {
  UserSettingsLogoutButton,
  UserSettingsLogoutButtonContainer,
  UserSettingsPageContainer,
  UserSettingsContainer,
  UserSettingsLabel,
  UserSettingsInput,
  UserSettingsSaveButton,
  UserSettingsH1,
  OrdersContainer,
  OrderContainer,
} from "./UserSettingsElements";

const UserSettings = ({ logout }) => {
  const { loading, data } = useQuery(ME);

  if (loading) {
    return <div>loading...</div>;
  }

  console.log(data);
  const { info, orders } = data.me;

  return (
    <UserSettingsPageContainer>
      <UserSettingsLogoutButtonContainer>
        <UserSettingsLogoutButton onClick={() => logout()}>
          logout
        </UserSettingsLogoutButton>
      </UserSettingsLogoutButtonContainer>
      <UserSettingsContainer>
        <UserSettingsH1>Your settings</UserSettingsH1>
        <UserSettingsLabel>Name</UserSettingsLabel>
        <UserSettingsInput placeholder={info.name} />
        <UserSettingsLabel>Adress</UserSettingsLabel>
        <UserSettingsInput placeholder={info.adress} />
        <UserSettingsLabel>Phone</UserSettingsLabel>
        <UserSettingsInput placeholder={info.phone} />
        <UserSettingsLabel>New Password</UserSettingsLabel>
        <UserSettingsInput placeholder="Only if you want to change it" />
        <UserSettingsInput placeholder="Repeat it" />
        <UserSettingsLabel>Password</UserSettingsLabel>
        <UserSettingsInput placeholder="Enter current password to continue" />
        <UserSettingsSaveButton>Save changes</UserSettingsSaveButton>
      </UserSettingsContainer>
      <UserSettingsH1>orders</UserSettingsH1>
      <OrdersContainer>
        {orders.map((order, i) => {
          return (
            <OrderContainer key={i}>
              <div>STATUS: {order.status}</div>
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
    </UserSettingsPageContainer>
  );
};

export default UserSettings;
