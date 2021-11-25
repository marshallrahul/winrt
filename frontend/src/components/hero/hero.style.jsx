import styled from "styled-components";

export const Wrapper = styled.div`
  height: 85rem;
  width: 100vw;
  background-color: #8bccff19;
  display: grid;
  align-items: center;
  padding-left: 7.5rem;
`;

export const HeroImage = styled.img`
  width: 90rem;
  position: absolute;
  top: -6rem;
  right: 1rem;
`;

export const Content = styled.div`
  width: 48rem;
  padding-bottom: 5rem;
`;

export const Title = styled.h1`
  font-size: 6.5rem;
  font-weight: bold;
  line-height: 7rem;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 3rem;
  color: #5f6368;
  margin-bottom: 4rem;
  width: 33rem;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 46rem;

  & > * {
    margin-right: 1rem;
    cursor: pointer;
  }
`;
