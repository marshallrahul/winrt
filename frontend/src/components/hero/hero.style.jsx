import styled from "styled-components";

export const Wrapper = styled.div`
  height: 85rem;
  background-color: #8bccff19;
  display: grid;
  align-items: center;
  padding-left: 7.5rem;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    padding: 0rem;
    height: 65rem;
  }

  @media only screen and (max-width: 768px) and (min-width: 601px) {
    height: 80rem;
    padding-left: 4rem;
  }
`;

export const HeroImage = styled.img`
  width: 55%;
  position: absolute;
  top: 14rem;
  right: 0rem;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @media only screen and (max-width: 946px) and (min-width: 600px) {
    top: 11rem;
    right: 0rem;
  }

  @media only screen and (max-width: 874px) and (min-width: 768px) {
    width: 70%;
    top: 10rem;
    right: -17rem;
  }

  @media only screen and (max-width: 768px) {
    width: 70%;
    top: 10rem;
    right: -17rem;
  }
`;

export const Content = styled.div`
  width: 48rem;
  padding-bottom: 5rem;

  @media only screen and (max-width: 600px) {
    text-align: center;
    width: auto;
    padding: 0;
  }

  @media only screen and (max-width: 946px) and (min-width: 601px) {
    margin-top: -8rem;
  }
`;

export const Title = styled.h1`
  font-size: 6.5rem;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  line-height: 7rem;
  margin-bottom: 1.8rem;

  @media only screen and (max-width: 370px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 600px) {
    margin-bottom: -1rem;
  }

  @media only screen and (max-width: 710px) {
    font-size: 5.5rem;
    line-height: 5rem;
  }

  @media only screen and (max-width: 946px) and (min-width: 710px) {
    font-size: 6rem;
    line-height: 6rem;
  }
`;

export const SubTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 3rem;
  color: #5f6368;
  margin-bottom: 4rem;
  width: 33rem;

  @media only screen and (max-width: 600px) {
    justify-self: center;
    width: auto;
    padding: 4rem 5rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 370px) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    font-size: 1.6rem;
  }
`;

export const IconContainer = styled.div`
  margin-top: 8rem;
  display: flex;

  a {
    margin-right: 1rem;
  }

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Icons = styled.img`
  width: 6rem;
`;
