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
  margin-top: 1rem;
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

export const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const FormInput = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

// export const FormButton = styled.button`
//   max-width: 100%;
//   padding: 11px 13px;
//   color: rgb(253, 249, 243);
//   font-weight: 600;
//   text-transform: uppercase;
//   background: #f03d4e;
//   border: none;
//   border-radius: 3px;
//   outline: 0;
//   cursor: pointer;
//   margin-top: 0.6rem;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease-out;
//   :hover {
//     background: rgb(200, 50, 70);
//   }
// `;

export const FormTitle = styled.h2`
  font-weight: normal;
  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const FormTextArea = styled.textarea`
  height: 100px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;
