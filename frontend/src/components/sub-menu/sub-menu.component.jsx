import React from "react";
import { useNavigate } from "react-router-dom";
import { SubMenuContainer, SubMenuItems } from "./sub-menu.style";

const Submenu = () => {
  const navigate = useNavigate();
  return (
    <SubMenuContainer>
      <SubMenuItems onClick={() => navigate("/signin")}>
        User Login
      </SubMenuItems>
      <SubMenuItems onClick={() => navigate("/")}>Dashboard</SubMenuItems>
    </SubMenuContainer>
  );
};

export default Submenu;
