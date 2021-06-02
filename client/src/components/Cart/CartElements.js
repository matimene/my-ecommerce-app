import styled from "styled-components";

export const CartContainer = styled.div`
  height: 90vh;
  background: #150f0f;
  color: #fff;
`;

export const CartTable = styled.table`
  width: 80vw;
  min-height: 300px;
  border-collapse: collapse;
  margin: auto;
`;

export const CartTableHeader = styled.th`
  text-transform: uppercase;
  text-align: start;
  font-size: 1.8rem;
`;

export const CartTableHeaderCentered = styled.th`
  text-transform: uppercase;
  text-align: start;
  font-size: 1.8rem;
  text-align: center;
`;

export const CartTableCell = styled.td`
  text-transform: capitalize;
  font-size: 1.2rem;
  justify-content: center;
`;

export const CartTableCellCentered = styled.td`
  text-transform: capitalize;
  font-size: 1.2rem;
  justify-content: center;
  text-align: center;
`;

export const CartDeleteItemButton = styled.button`
  text-transform: capitalize;
  font-size: 0.8rem;
  width: 40%;
  background: #e31837;
  color: #fff;
  border: none;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const CartTableCellTotalPrice = styled.td`
  text-transform: uppercase;
  font-size: 1.8rem;
  text-align: center;
`;

export const PlaceOrderButton = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const CartButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const OrderPlaced = styled.div`
  height: 90vh;
  background: #150f0f;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  padding-top: 100px;
`;
