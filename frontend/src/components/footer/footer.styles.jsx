import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #fff;
`;

export const FooterContainer = styled.div`
  position: relative;
  margin: 2rem 7.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: baseline;
  background-color: #f2f2f2;

  @media only screen and (max-width: 600px) {
    margin: 1rem;
    grid-template-columns: auto;
    grid-template-rows: repeat(3, 1fr);
    justify-content: center;
  }

  @media only screen and (max-width: 370px) {
    grid-template-rows: repeat(3, max-content);
    row-gap: 2rem;
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    margin: 2rem;
    column-gap: 1rem;
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin: 2rem 2rem;
  }
`;

export const CopyrightTag = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  justify-self: flex-start;

  @media only screen and (max-width: 370px) {
    justify-self: center;
  }
`;

export const FooterList = styled.ul`
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, min-content);
  column-gap: 3.5rem;
  margin-bottom: 0;

  @media only screen and (max-width: 370px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 1rem;
    text-align: center;
    justify-self: center;
  }
`;

export const MediaContainer = styled.div`
  justify-self: flex-end;
  display: flex;

  @media only screen and (max-width: 600px) {
    justify-self: center;
  }
`;

export const Icons = styled.img`
  width: 5rem;
`;
