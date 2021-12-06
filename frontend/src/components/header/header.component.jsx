import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Heart, ShoppingCart } from "phosphor-react";
import Submenu from "../sub-menu/sub-menu.component";
import {
  WrapperContianer,
  Logo,
  NavContainer,
  NavLinks,
  NavIconContainer,
  NavIcons,
  CheckBtn,
  Label,
  CheckBox,
} from "./header.style";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <WrapperContianer>
        <CheckBox type="checkbox" id="check" style={{ display: "none" }} />
        <Logo>WINRT</Logo>
        <Label for="check" className="menu-btn">
          <CheckBtn className="fas fa-bars"></CheckBtn>
        </Label>
        <NavContainer className="nav-links">
          <NavLinks to="/">Home</NavLinks>
          <NavLinks to="/collections">Bikes</NavLinks>
          <NavLinks to="/">Our Stories</NavLinks>
          <NavLinks to="/">Pages</NavLinks>
          <NavLinks to="/">Portfolio</NavLinks>
        </NavContainer>
        <NavIconContainer>
          <NavIcons>
            <User size={18} />
            <Submenu />
          </NavIcons>
          <NavIcons>
            <Heart size={18} />
          </NavIcons>
          <NavIcons onClick={() => navigate("/cart")}>
            <ShoppingCart size={18} />
          </NavIcons>
        </NavIconContainer>
      </WrapperContianer>
    </div>
  );
};

export default Header;
