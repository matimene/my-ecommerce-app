import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: #150f0f;
  color: #fff;
  display: flex;
  flex-direction: space-between;
  flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding: 5px;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 200px;
`;

export const ProductImg = styled.img`
  height: 200px;
  min-width: 150px;
  max-width: 100%;
  box-shadow: 3px 3px #fdc500;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
  font-family: "Nunito", sans-serif;
`;

export const ProductPrice = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  width: 100%;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
