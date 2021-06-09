import styled from "styled-components";

export const StoreConfigContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 30px;
  justify-content: center;
`;

export const StoreConfigSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  width: 400px;
  align-items: flex-end;
  margin: 10px 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`;

export const SectionLabel = styled.label`
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const SectionButton = styled.button`
  margin-left: 1.5rem;
  width: 60px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 2px;
  border: none;
  background-color: ${(props) => props.color};

  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    color: "black";
  }
`;

export const CatFilContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;
