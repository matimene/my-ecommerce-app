import React from "react";
import {
  FooterBody,
  FooterContainer,
  FooterHeader,
  FooterHeaderText,
  FooterLogo,
  FooterP,
} from "./FooterElements";
import Logo from "../../images/store-logo.jpg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <FooterHeaderText>Call us at 0036249761</FooterHeaderText>
      </FooterHeader>
      <FooterBody>
        <FooterLogo>
          <img src={Logo} />
        </FooterLogo>
        <FooterP>Av. Siempre Viva 123</FooterP>
        <FooterP>Valencia, 46980</FooterP>
        <FooterP>Spain</FooterP>
      </FooterBody>
    </FooterContainer>
  );
};

export default Footer;
