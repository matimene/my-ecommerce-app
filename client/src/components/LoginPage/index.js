import React from "react";
import Form from "../Form";
import {
  LoginPageContainer,
  LoginBarLink,
  LoginFormContainer,
  NavLogo,
  Nav,
} from "./LoginPageElements";
import ImgBg from "../../images/store-hero.jpg";
import Logo from "../../images/store-logo.jpg";

const LoginPage = () => {
  return (
    <>
      <LoginPageContainer img={ImgBg}>
        <Nav>
          <LoginBarLink to="/">
            <NavLogo>
              <img src={Logo} alt="store-logo" />
            </NavLogo>
          </LoginBarLink>
        </Nav>
        <LoginFormContainer>
          <Form />
        </LoginFormContainer>
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;
