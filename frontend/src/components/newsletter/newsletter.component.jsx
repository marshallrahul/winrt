import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  NewsletterContainer,
  FormContainer,
  Title,
  Paragraph,
  FormInputs,
  Container,
} from "./newsletter.styles";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <Container>
        <Title>Newsletter</Title>
        <Paragraph>
          Resgister now with our newsletter and get the <br /> latest updates
          available
        </Paragraph>
      </Container>
      <FormContainer onSubmit={null}>
        <FormInputs>
          <FormInput placeholder="Name" />
          <FormInput placeholder="Email" />
        </FormInputs>
        <CustomButton type="submit" newsletter>
          Send
        </CustomButton>
      </FormContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;
