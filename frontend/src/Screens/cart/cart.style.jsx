import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: min-content max-content;
  column-gap: 10rem;

  @media only screen and (max-width: 1024px) {
    padding: 5rem 0;
    column-gap: 5rem;
  }

  @media only screen and (max-width: 946px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, min-content);
    row-gap: 4rem;
  }

  @media only screen and (max-width: 712px) {
    padding: 5rem 1rem;
  }

  @media only screen and (max-width: 646px) {
    row-gap: 0;
  }
`;

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  column-gap: 5rem;
  align-items: flex-start;
  border-bottom: 2px solid #bbc8d4;
  padding-bottom: 1rem;

  @media only screen and (max-width: 712px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    column-gap: 2rem;
    row-gap: 1rem;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
`;

export const ImageContainer = styled.img`
  width: 15rem;
  border: 1px solid #bbc8d4;
  margin-right: 2rem;

  @media only screen and (max-width: 500px) {
    margin-right: 1rem;
  }
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #bbc8d4;
  width: 16rem;

  @media only screen and (max-width: 330px) {
    width: 14rem;
  }
`;

export const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingNum = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #5a4ff3;
  margin-right: 0.7rem;
  margin-bottom: -2px;
`;

export const RemoveText = styled.div`
  font-size: 1.5rem;
  color: #e95e5e;
  cursor: pointer;

  @media only screen and (max-width: 712px) {
    grid-area: 2 / 2 / -1 / 3;
    margin-left: -3rem;
  }

  @media only screen and (max-width: 646px) {
    grid-area: 3 / 2 / 4 / 3;
  }

  @media only screen and (max-width: 500px) {
    grid-area: 4 / 1 / 5 / 2;
    margin-left: 0;
  }
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 800;

  @media only screen and (max-width: 712px) {
    justify-self: flex-end;
  }

  @media only screen and (max-width: 646px) {
    grid-area: 1 / 3 / 2 / 4;
  }

  @media only screen and (max-width: 500px) {
    grid-area: 2 / 2 / 3 / 3;
    justify-self: flex-start;
    margin-left: -3.5rem;
  }
`;

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(3, min-content);

  @media only screen and (max-width: 946px) {
    grid-area: 1 / 1 / 2 / 2;
    align-items: center;
    margin-bottom: 4rem;
  }
`;

export const Thead = styled.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #bbc8d4;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  color: #25313c;
`;

export const QTY = styled.div`
  margin-right: -15rem;

  @media only screen and (max-width: 712px) {
    margin-right: -20rem;
  }

  @media only screen and (max-width: 646px) {
    display: none;
  }
`;

export const Prc = styled.div`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const Text = styled.div`
  font-size: 1.6rem;
`;

export const TotalPrice = styled.div`
  font-size: 4rem;
  font-weight: 800;
`;

export const Quantity = styled.div`
  @media only screen and (max-width: 712px) {
    justify-self: flex-end;
    margin-right: -6rem;
  }

  @media only screen and (max-width: 646px) {
    grid-area: 2 / 2 / 3 / 3;
    justify-self: flex-start;
    margin-left: -3rem;
  }

  @media only screen and (max-width: 500px) {
    grid-area: 3 / 1 / 4 / 2;
    margin-left: 0;
  }
`;
