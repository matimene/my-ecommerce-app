import React from "react";
import {
  Nav,
  NavLink,
  NavLogo,
  NavAuthLink,
  NavStart,
  NavEnd,
  NavP,
} from "./NavbarElements";
import Logo from "../../images/store-logo.jpg";
import { FiShoppingCart } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";

const Navbar = ({ token, toggle, transparent }) => {
  return (
    <>
      <Nav transparent={transparent ? true : false}>
        {toggle && (
          <NavStart>
            <NavP onClick={toggle}>Menu</NavP>
          </NavStart>
        )}
        <NavLogo>
          <NavLink to="/">
            <img src={Logo} alt="store-logo" />
          </NavLink>
        </NavLogo>
        <NavEnd>
          {token ? (
            <>
              <NavAuthLink to="/cart">
                <FiShoppingCart />
              </NavAuthLink>
              <NavAuthLink to="/settings">
                <BiUserCircle />
              </NavAuthLink>
            </>
          ) : (
            <NavAuthLink to="/login">Log in</NavAuthLink>
          )}
        </NavEnd>
      </Nav>
    </>
  );
};

export default Navbar;
