import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  NewsletterContainer,
  FormContainer,
  Title,
  Paragraph,
  FormInputs,
} from "./newsletter.styles";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <div>
        <Title>Newsletter</Title>
        <Paragraph>
          Resgister now with our newsletter and get the <br /> latest updates
          available
        </Paragraph>
      </div>
      <FormContainer onSubmit={null}>
        <FormInputs>
          <FormInput placeholder="Name" />
          <FormInput placeholder="Email" />
        </FormInputs>
        <CustomButton type="submit">Send</CustomButton>
      </FormContainer>
    </NewsletterContainer>
  );
};

export default Newsletter;
