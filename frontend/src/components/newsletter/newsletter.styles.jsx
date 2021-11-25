import styled from "styled-components";

export const NewsletterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: #c7fceb;
  padding: 10rem 0;
`;

export const Container = styled.div`
  justify-self: flex-end;
  margin-right: 10rem;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #25313c;
`;

export const Paragraph = styled.p`
  font-size: 1.3rem;
  color: #25313c;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-self: flex-start;
`;

export const FormInputs = styled.div`
  display: grid;
  row-gap: 2rem;
  margin-right: 4rem;
`;
