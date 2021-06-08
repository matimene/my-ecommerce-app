import styled from "styled-components";

export const AdminPageContainer = styled.div`
  background: #150f0f;
  color: #fff;
`;

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1rem 4rem;

  @media screen and (max-width: 650px) {
    width: 100%;
    height: 70px;
  }
`;

export const NavigationItem = styled.div`
  display: flex;
  width: auto;
  padding: 1rem 4rem;
  color: ${(props) => (props.active ? "#000" : "#fff")};
  background: ${(props) => (props.active ? "#ffc500" : "#e31837")};

  &:hover {
    background: ${(props) => (props.active ? "#e31837" : "#ffc500")};
    transition: 0.2s ease-out;
    cursor: pointer;
    color: ${(props) => (props.active ? "#fff" : "#000")};
  }

  @media screen and (max-width: 650px) {
    height: 70px;
    align-items: center;
  }
`;

export const OrdersContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

export const OrderCardContainer = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 2;
  border-color: red;
  padding: 10px 15px;
  margin: 5px;
  border: 2px solid;
  border-color: ${(props) => {
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
`;

export const OrderStatus = styled.div`
  text-align: center;
  font-size: 1.6rem;
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
`;

export const OrderLineProducts = styled.div`
  padding-top: 0.5rem;
  text-align: end;
`;

export const OrderLine = styled.div`
  padding-top: 0.5rem;
`;
