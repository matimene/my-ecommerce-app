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

const Navbar = ({ user, toggle }) => {
  return (
    <>
      <Nav>
        <NavStart>
          <NavP onClick={toggle}>Menu</NavP>
        </NavStart>
        <NavLogo>
          <NavLink to="/">
            <img src={Logo} alt="store-logo" />
          </NavLink>
        </NavLogo>
        <NavEnd>
          {user ? (
            <>
              <NavAuthLink to="/cart">
                <FiShoppingCart />
              </NavAuthLink>
              <NavAuthLink to="/settings">
                <BiUserCircle />
              </NavAuthLink>
            </>
          ) : (
            <NavAuthLink>Log in</NavAuthLink>
          )}
        </NavEnd>
      </Nav>
    </>
  );
};

export default Navbar;
