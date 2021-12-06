import styled from "styled-components";

export const CollectionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: auto;
  column-gap: 4rem;
  row-gap: 3rem;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding-top: 4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  padding: 5rem 7.5rem 25rem;

  @media only screen and (max-width: 697px) {
    flex-wrap: wrap;
    padding: 2rem 5rem 10rem;
  }

  @media only screen and (max-width: 768px) and (min-width: 425px) {
    padding: 2rem 4rem 10rem;
  }
`;

export const Heading = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const Filter = styled.div`
  flex-basis: 35rem;
  margin-right: 5rem;

  @media only screen and (max-width: 768px) and (min-width: 425px) {
    margin-right: 2rem;
    flex-basis: 40rem;
  }
`;

export const Box = styled.div`
  margin-top: 4rem;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  margin-left: 0.5rem;
  margin-bottom: 0;
`;
