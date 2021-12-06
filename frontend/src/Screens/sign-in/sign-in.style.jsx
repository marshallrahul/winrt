import styled from "styled-components";

export const SignInContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  margin-top: 10rem;

  @media only screen and (max-width: 768px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 3.5rem;

  @media only screen and (max-width: 1024px) {
    font-size: 4.5rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 3.5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4rem 0;
`;

export const HorizontalLine = styled.div`
  border: 1px solid #bbc8d4;
  height: 1px;
  width: 20rem;

  @media only screen and (max-width: 1024px) {
    width: 16rem;
  }

  @media only screen and (max-width: 320px) {
    width: 12rem;
  }
`;

export const Text = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
  padding: 0 0.8rem;
  color: #bbc8d4;

  @media only screen and (max-width: 320px) {
    padding: 0;
  }
`;

export const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, min-content);
    row-gap: 2rem;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, min-content);
    row-gap: 2rem;
  }
`;

export const SocialContainer = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d9cdb;
  border: 2px solid #2d9cdb;
  border-radius: 2px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media only screen and (max-width: 1024px) {
    font-weight: 600;
    border: ${(props) =>
      props.facebook ? "2px solid #4267b2" : "2px solid #4285f4"};
    background-color: #ffffff;
    color: #2d9cdb;
    justify-content: center;
  }
`;

export const Illustration = styled.img`
  width: 100%;
  max-width: 55rem;
  align-self: center;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Form = styled.div`
  display: grid;
`;

export const FormContainer = styled.div`
  align-self: center;
`;

export const RegisterText = styled.div`
  font-size: 1.4rem;
  margin-top: 4rem;
`;

export const GoogleIcon = styled.i`
  font-size: 2rem;
  color: #4285f4;
  margin-right: 1rem;
`;

export const FacebookIcon = styled.i`
  font-size: 2rem;
  color: #4267b2;
  margin-right: 1rem;
`;
