import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginPageContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${(props) => props.img});
  height: 80vh;
  background-position: center;
  background-size: cover;
`;

export const LoginBarLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  margin: auto;
  cursor: pointer;
  padding: 10px;
`;

export const LoginFormContainer = styled.div`
  align-items: center;
`;

export const Nav = styled.div`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const NavLogo = styled.div`
  justify-content: center;
  margin: auto;
  cursor: pointer;
  color: #fff;
`;
