import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 7.5rem;
  padding-bottom: 20rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 5rem 0 1.5rem;
`;

export const UnderLine = styled.hr`
  color: #000;
  width: 5rem;
  margin: auto;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const TextBox = styled.div`
  margin-bottom: 5rem;
`;

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  column-gap: 8rem;
  row-gap: 5rem;
  justify-content: space-between;
  align-items: center;
`;
