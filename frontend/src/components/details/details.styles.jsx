import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-template-rows: auto;
  align-items: center;
  justify-content: center;
  background-color: #53c2f5;

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;

  & > * {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
`;

export const DetailBox = styled.div`
  background-color: #53c2f5;
  padding-left: 7.5rem;

  @media only screen and (max-width: 600px) {
    text-align: center;
    padding: 0;
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    padding-left: 4rem;
  }
`;

export const PreText = styled.div`
  font-size: 1.23rem;
  font-weight: 900;
  letter-spacing: 1rem;
  text-transform: uppercase;
  color: #007ad7;
  margin-left: 0.5rem;

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    font-size: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    font-size: 3.5rem;
  }
`;

export const DescriptionText = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #ffffff;
  padding-top: 1rem;
  margin-bottom: 3rem;
`;
