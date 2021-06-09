import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle, categories }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        {categories.map((cat, i) => (
          <SidebarLink to={`/store/${cat}`} key={i}>
            Pizzas
          </SidebarLink>
        ))}
        <SidebarLink to="/store">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/cart">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
