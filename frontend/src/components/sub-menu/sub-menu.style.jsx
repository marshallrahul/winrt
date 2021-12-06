import styled from "styled-components";

export const SubMenuContainer = styled.div`
  position: absolute;
  opacity: 0;
  transition: all 0.2s;
  top: 4.5rem;
`;

export const SubMenuItems = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  background-color: #56ccf2;
  padding: 1rem;
  border-bottom: 2px solid #ffffff;

  &:hover {
    background-color: #08baf5;
  }
`;
