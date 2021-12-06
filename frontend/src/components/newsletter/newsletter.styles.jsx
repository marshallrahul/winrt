import styled from "styled-components";

export const NewsletterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(46rem, 1fr));
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #c7fceb;
  padding: 10rem 0;

  @media only screen and (max-width: 600px) {
    display: block;
  }

  @media only screen and (max-width: 768px) and (min-width: 600px) {
    padding: 4rem;
  }

  /* @media only screen and (max-width: 922px) and (min-width: 768px) {
  } */
`;

export const Container = styled.div`
  justify-self: flex-end;
  margin-right: 10rem;

  @media only screen and (max-width: 768px) {
    margin: 0 0 0 0;
    text-align: center;
    margin-right: 0;
    justify-self: center;
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-right: 5rem;
    justify-self: auto;
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #25313c;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  color: #25313c;

  @media only screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  justify-self: flex-start;

  @media only screen and (max-width: 600px) {
    display: grid;
    justify-content: center;
    row-gap: 2rem;
    padding-top: 4rem;
  }

  @media only screen and (max-width: 924px) and (min-width: 600px) {
    justify-self: center;
    padding: 4rem 0;
  }
`;

export const FormInputs = styled.div`
  display: grid;
  row-gap: 2rem;
  margin-right: 4rem;

  @media only screen and (max-width: 600px) {
    margin-right: 0;
  }
`;
