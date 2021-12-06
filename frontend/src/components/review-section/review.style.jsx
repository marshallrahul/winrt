import styled from "styled-components";

export const ReviewContainer = styled.div`
  padding: 4rem 10rem 0;
  padding-bottom: 20rem;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 2rem 6rem 15rem;
  }
`;

export const Reviews = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  column-gap: 10rem;
  row-gap: 5rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 5rem 0 1.5rem;

  @media only screen and (max-width: 370px) {
    font-size: 3.5rem;
  }
`;

export const UnderLine = styled.hr`
  color: #000;
  width: 5rem;
  margin: auto;
  margin-bottom: 8rem;
`;

export const Dots1 = styled.img`
  position: absolute;
  top: 17.6rem;
  left: 4.2rem;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    left: 2.2rem;
  }

  @media only screen and (max-width: 370px) {
    top: 22.6rem;
  }
`;

export const Dots2 = styled.img`
  position: absolute;
  bottom: 12rem;
  right: -7.5rem;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    bottom: 8rem;
    right: -10.5rem;
  }
`;

export const Vector = styled.img`
  position: absolute;
  bottom: -8rem;
  left: 0rem;
  z-index: -2;

  @media only screen and (max-width: 600px) {
    bottom: -2rem;
  }
`;
