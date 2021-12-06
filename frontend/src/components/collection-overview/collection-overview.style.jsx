import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 7.5rem;
  padding-bottom: 15rem;

  @media screen and (max-width: 600px) {
    padding: 0 5rem;
    padding-bottom: 5rem;
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    padding: 0 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 5rem 0 1.5rem;

  @media only screen and (max-width: 375px) {
    font-size: 3.5rem;
  }
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

  @media only screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }

  @media only screen and (max-width: 759px) and (min-width: 562px) {
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  }
`;

export const MoreLink = styled(Link)`
  font-size: 1.5rem;
  position: relative;
  float: right;
  margin-top: 6rem;

  i {
    color: #6d7d8b;
    margin-top: 0.45rem;
    margin-left: 0.5rem;
    position: absolute;
  }

  &:hover {
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    float: none;
    display: block;
    margin-bottom: 4rem;
  }
`;
