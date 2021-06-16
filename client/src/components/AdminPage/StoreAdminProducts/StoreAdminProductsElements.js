import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const AddNewProductButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const AddNewProductButton = styled.button`
  background-color: #e31837;
  padding: 1rem 2rem;
  color: #fff;
  border-radius: 3px;
  align-items: center;
  border: none;
  text-transform: uppercase;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    background-color: #ffc500;
    color: #000;
  }
`;

export const AddNewProductFormButton = styled.button`
  background-color: #e31837;
  padding: 0.75rem 2rem;
  margin: 20px 40px;
  color: #fff;
  border-radius: 3px;
  align-items: center;
  border: none;
  text-transform: uppercase;

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    background-color: #000;
    color: ffc500;
  }
`;
export const FormContainer = styled.div`
  width: 60vw;
  min-width: 500px;
  background: #ffc500;
  color: #000;
  margin: auto;
  text-align: center;
`;

export const FormNP = styled.form``;

export const FormNPLabel = styled.label`
  text-transform: capitalize;
  font-size: 1rem;
`;

export const FormNPItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormNPInput = styled.input`
  border: none;
  border-radius: 3px;
  margin: 0 20px;
`;

export const FormNPTextArea = styled.textarea`
  border: none;
  border-radius: 3px;
  margin: 0 20px;
`;

export const TableContainer = styled.div`
  width: 85vw;
  min-width: 700px;
  margin: auto;
`;

export const ProductsTable = styled.table`
  width: 100%;
  justify-content: space-between;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-transform: uppercase;
  font-weight: bold;
  color: lightgray;
  font-size: 0.8rem;
  padding: 10px;
  text-align: start;
`;

export const TableTr = styled.tr`
  border: solid;
  border-top: none;
  border-width: 2px 0;
  border-color: lightgray;
`;

export const TableProductTr = styled.tr`
  border: solid;
  border-top: none;
  border-width: 1px 0;
  border-color: grey;
  color: ${(props) => (props.disable ? `red` : `white`)};
`;

export const TableProductTd = styled.td`
  padding: 10px;
`;
