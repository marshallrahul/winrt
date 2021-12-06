import styled from "styled-components";

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 8rem;
  row-gap: 4rem;
  align-items: flex-start;
  margin: 5rem 15rem 0;

  @media only screen and (max-width: 884px) and (min-width: 780px) {
    margin: 5rem 5rem 0;
    column-gap: 4rem;
  }

  @media only screen and (max-width: 603px) {
    margin: 5rem 10rem 0;
  }

  @media only screen and (max-width: 504px) {
    grid-template-columns: auto;
    margin: 0;
    padding: 2rem 4rem 0;
  }

  @media only screen and (max-width: 320px) {
    padding: 2rem 1rem 0;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  min-width: 30rem;
  max-width: 55rem;
  border: 1px solid #6d7d8b3e;
  align-self: flex-start;
  justify-self: end;
`;

export const Container = styled.div`
  align-self: flex-start;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 0.3rem;
  color: #25313c;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
`;

export const Description = styled.div`
  font-size: 1.3rem;
  color: #6d7d8b;
  margin-bottom: 3rem;
`;

export const Select = styled.select`
  font-size: 1.3rem;
  color: #bbc8d4;
  border: 2px solid #bbc8d4;
  border-radius: 4px;
  width: 8rem;
  height: 4rem;
  margin-bottom: 2rem;
`;

export const SaveContainer = styled.span`
  display: flex;
  align-items: center;
  margin-left: 3rem;

  span {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

export const Box = styled.div`
  display: flex;
`;
