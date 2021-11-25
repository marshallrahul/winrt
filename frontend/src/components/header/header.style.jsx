import styled from "styled-components";

export const WrapperContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5rem;
  padding: 0 7.5rem;
  background-color: rgba(86, 204, 242, 0.2);
`;

export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const NavContainer = styled.ul`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const NavLinks = styled.li`
  list-style: none;
  margin: 0 2rem;
  cursor: pointer;
`;

export const NavIconContainer = styled.ul`
  display: flex;
  list-style: none;
  padding-top: 0.5rem;
`;

export const NavIcons = styled.li`
  padding: 0 1rem;
  cursor: pointer;
`;
