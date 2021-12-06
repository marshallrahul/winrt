import styled from "styled-components";
import { Link } from "react-router-dom";

export const WrapperContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
  padding: 0 7.5rem;
  background-color: rgba(86, 204, 242, 0.2);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.2s ease-out;

  @media only screen and (max-width: 946px) {
    padding: 0 4rem;
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  font-family: "Lilita One", cursive;
  margin-bottom: 0;
`;

export const NavContainer = styled.ul`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-bottom: 0;

  @media only screen and (max-width: 946px) {
    font-size: 2rem;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100%;
    height: 50rem;
    position: absolute;
    top: 5.6rem;
    left: -100%;
    transition: all 0.3s ease-out;
    color: #ffffff;
    background-color: #58d5ffef;
  }
`;

export const NavLinks = styled(Link)`
  list-style: none;
  margin: 0 2rem;
  cursor: pointer;
`;

export const NavIconContainer = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 425px) {
    margin-right: -2rem;
  }
`;

export const NavIcons = styled.li`
  padding: 0 1rem;
  cursor: pointer;
  &:hover {
    div {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 425px) {
    padding: 0 0.5rem;
  }
`;

export const CheckBox = styled.input`
  &:checked ~ .nav-links {
    top: 5.6rem;
    left: 0;
    z-index: 1;
  }
`;

export const Label = styled.label`
  display: none;
  margin-bottom: 0;
  cursor: pointer;

  @media (max-width: 946px) {
    display: block;
    position: absolute;
    top: 1.8rem;
    left: 1.5rem;
  }
`;

export const CheckBtn = styled.i`
  font-size: 2rem;
`;

export const ResponsiveNav = styled.div`
  position: fixed;
  z-index: 5000;

  & > * {
    display: none;
  }
`;
