import styled from "styled-components";

export const StoreContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  background: #150f0f;
`;

export const NextPageContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  background: #150f0f;
  color: #fff;
  margin: auto;
`;

export const NextPageButton = styled.button`
  width: 25px;
  height: 25px;
  background: #ffc500;
  cursor: pointer;
  color: #000;
  border: none;
  margin: 1px;
  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const StorePanelContainer = styled.div`
  flex-grow: 1;
  padding-right: 5px;
`;

export const PanelItemContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px;
  font-size: 1.2rem;
  color: #fff;
`;

export const PanelHeader = styled.div`
  background: #e31837;
  font-weight: bold;
  font-size: 2rem;
`;

export const PanelCategory = styled.div`
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

const PanelFilterCategory = styled.div`
  text-transform: capitalize;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const PanelFilterCategoryElement = ({ setFilter, value }) => {
  return (
    <PanelFilterCategory>
      <input type="checkbox" onClick={() => setFilter(value)} />
      {value}
    </PanelFilterCategory>
  );
};

// export const StoreProducsContainer = styled.div`
//   flex-grow: 3;
//   margin: 5px;
//   display: flex;
//   flex-direction: space-between;
//   align-content: space-between;
//   flex-wrap: wrap;
//   color: #fff;
// `;

export const StoreProducsContainer = styled.div`
  margin: 5px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 20px;
  padding: 5px;
`;

export const StoreProductWrapper = styled.div`
  width: 100%;
  /* background: rgba(255, 255, 255, 0.75); */
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.4)
    ),
    url(${(props) => props.img});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StoreProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 250px;
`;

export const StoreProductTitle = styled.div`
  font-weight: 400;
  font-size: 1.5rem;
  padding-left: 1rem;
`;

export const StoreProductPrice = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  padding-left: 1rem;
  margin-bottom: 0.5rem;
`;

export const StoreProductDataContainer = styled.div``;

export const StoreProductButton = styled.div`
  font-size: 1rem;
  padding: 0.7rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  width: 100%;
  text-align: center;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const StoreProductItem = ({ product }) => {
  return (
    <StoreProductWrapper img={product.img}>
      <StoreProductImg src={product.img} />
      <StoreProductDataContainer>
        <StoreProductTitle>{product.name}</StoreProductTitle>
        <StoreProductPrice>{product.price}</StoreProductPrice>
        <StoreProductButton>Add to cart</StoreProductButton>
      </StoreProductDataContainer>
    </StoreProductWrapper>
  );
};
