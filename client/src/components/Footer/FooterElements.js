import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterHeader = styled.div`
  padding-top: 5px;
  height: 60px;
  background: #ffc500;
  align-items: center;
  color: #000;
  &:hover {
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;

export const FooterHeaderText = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

export const FooterBody = styled.div`
  height: 150px;
  width: 100%;
  background: #150f0f;
  justify-content: center;
  text-align: center;
`;

export const FooterLogo = styled.div`
  padding-top: 20px;
  padding-bottom: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const FooterP = styled.p`
  font-size: 1rem;
  font-family: "Nunito", sans-serif;
  color: #fff;
`;
