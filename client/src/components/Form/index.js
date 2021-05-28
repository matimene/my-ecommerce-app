import React, { useState } from "react";
import {
  Form,
  FormWrapper,
  FormInput,
  FormButton,
  FormTitle,
} from "./FormElements";

const FormUser = ({ login, signup }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isNew, setIsNew] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ username, password });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === passwordCheck) {
      signup({ name, username, password });
    } else {
      window.alert("Passwords dont match");
    }
  };

  const loginForm = () => {
    return (
      <FormWrapper>
        <Form onSubmit={handleLogin}>
          <FormTitle>Log in to buy</FormTitle>
          <FormInput
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormButton type="submit">Login</FormButton>
          <FormButton onClick={() => setIsNew(true)}>
            Don't have an account yet? Sign up now!
          </FormButton>
        </Form>
      </FormWrapper>
    );
  };

  const signupForm = () => {
    return (
      <FormWrapper>
        <Form onSubmit={handleSignup}>
          <FormTitle>Create your account now to buy</FormTitle>
          <FormInput
            type="text"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormInput
            type="text"
            name="username"
            placeholder="Enter an username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Enter a password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={passwordCheck}
            placeholder="Repeat your password"
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          <FormButton type="submit">Sign up</FormButton>
          <FormButton onClick={() => setIsNew(false)}>
            Already have an account? Log in!
          </FormButton>
        </Form>
      </FormWrapper>
    );
  };

  return isNew ? signupForm() : loginForm();
};

export default FormUser;
