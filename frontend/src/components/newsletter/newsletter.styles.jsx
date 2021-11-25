import styled from "styled-components";

export const NewsletterContainer = styled.div`
  margin-bottom: 20rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #c7fceb;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #25313c;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  color: #25313c;
`;

export const FormContainer = styled.form`
  display: flex;

  &:first-child {
    display: grid;
  }
`;

export const FormInputs = styled.div``;
