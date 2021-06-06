import styled from "styled-components";

export const UserSettingsLogoutButton = styled.button`
  font-size: 1.4rem;
  padding: 0.7rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  text-transform: uppercase;
  margin-bottom: 10px;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const UserSettingsLogoutButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserSettingsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #150f0f;
  color: #fff;
`;

export const UserSettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 80vw;
  margin: auto;
`;

export const UserSettingsLabel = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const UserSettingsInput = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const UserSettingsH1 = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

export const UserSettingsSaveButton = styled.button`
  font-size: 1rem;
  margin-top: 5px;
  padding: 0.5rem 1.5rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  text-transform: uppercase;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 250px;
  border: 2px solid;
  border-color: ${(props) => {
    switch (props.status) {
      case "PENDING":
        return "grey";
      case "SHIPPED":
        return "#ffc500";
      case "CANCELED":
      case "COMPLETED":
        return "green";
      default:
        return "grey";
    }
  }};
  padding: 5px 10px;
  margin: 10px 5px;
`;

export const OrderStatusDiv = styled.div`
  color: ${(props) => {
    switch (props.status) {
      case "PENDING":
        return "grey";
      case "SHIPPED":
        return "#ffc500";
      case "CANCELED":
        return "red";
      case "COMPLETED":
        return "green";
      default:
        return "grey";
    }
  }};
  font-size: 1.2rem;
`;
