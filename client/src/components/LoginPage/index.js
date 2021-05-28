import React, { useEffect } from "react";
import Form from "../Form";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, CREATE_USER } from "../../queries";

import {
  LoginPageContainer,
  LoginBarLink,
  LoginFormContainer,
  NavLogo,
  Nav,
} from "./LoginPageElements";
import ImgBg from "../../images/store-hero.jpg";
import Logo from "../../images/store-logo.jpg";

const LoginPage = ({ setToken }) => {
  const [loginUser, resultLogin] = useMutation(LOGIN_USER, {
    onError: (error) => {
      //setError(error.graphQLErrors[0].message);
      console.log(error.graphQLErrors[0].message);
    },
  });

  const [createUser, resultSignup] = useMutation(CREATE_USER, {
    onError: (error) => {
      console.log(error.graphQLErrors[0].message);
    },
  });

  useEffect(() => {
    if (resultLogin.data) {
      const token = resultLogin.data.loginUser.value;
      setToken(token);
      localStorage.setItem("myecommercestore-user-token", token);
    }
  }, [resultLogin.data]);

  const handleLogin = async ({ username, password }) => {
    await loginUser({ variables: { username, password } });
  };

  const handleSignup = async ({ name, username, password }) => {
    await createUser({ variables: { name, username, password } });
  };

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
          <Form login={handleLogin} signup={handleSignup} />
        </LoginFormContainer>
      </LoginPageContainer>
    </>
  );
};

export default LoginPage;
