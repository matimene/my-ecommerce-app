import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
  HeroBtn,
} from "./HeroElements";
import ImgBg from "../../images/store-hero.jpg";

const Hero = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <HeroContainer img={ImgBg}>
      <Navbar toggle={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best pizza on the town</HeroH1>
          <HeroP>At least our moms says that we are</HeroP>
          <HeroBtn>Taste yours now</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
