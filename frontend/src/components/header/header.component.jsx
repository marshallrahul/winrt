import React from "react";
import { User, Heart, ShoppingCart } from "phosphor-react";
import {
  WrapperContianer,
  Logo,
  NavContainer,
  NavLinks,
  NavIconContainer,
  NavIcons,
} from "./header.style";

const Header = () => {
  return (
    <WrapperContianer>
      <Logo>WINRT</Logo>
      <NavContainer>
        <NavLinks>Home</NavLinks>
        <NavLinks>Bikes</NavLinks>
        <NavLinks>Our Stories</NavLinks>
        <NavLinks>Pages</NavLinks>
        <NavLinks>Portfolio</NavLinks>
      </NavContainer>
      <NavIconContainer>
        <NavIcons>
          <User size={18} />
        </NavIcons>
        <NavIcons>
          <Heart size={18} />
        </NavIcons>
        <NavIcons>
          <ShoppingCart size={18} />
        </NavIcons>
      </NavIconContainer>
    </WrapperContianer>
  );
};

export default Header;
