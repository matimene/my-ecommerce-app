import styled from "styled-components";
import { Link } from "react-router-dom";

// export const NavOriginal = styled.div`
//   background: transparent;
//   height: 80px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: 700;
// `;

export const Nav = styled.div`
  background: ${(props) => (props.transparent ? `transparent` : `#150f0f`)};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
`;

export const NavP = styled.p`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
`;

export const NavStart = styled.div`
  float: left;
`;

export const NavEnd = styled.div`
  float: right;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
`;

export const NavAuthLink = styled(Link)`
  color: #fff;
  font-size: 1.25rem;
  display: flex;
  right: 0px;
  text-decoration: none;
  cursor: pointer;
  padding: 10px;
`;

export const NavLogo = styled.div`
  justify-content: center;
  margin: auto;
  cursor: pointer;
  color: #fff;
`;
