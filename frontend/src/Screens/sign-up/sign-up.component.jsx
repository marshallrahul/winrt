import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  SignInContainer,
  Title,
  HorizontalLine,
  Text,
  Illustration,
  Form,
  Container,
  FormContainer,
  RegisterText,
  Social,
} from "./sign-up.style";

const SignUp = () => {
  return (
    <SignInContainer>
      <Illustration
        src="/images/undraw_Prototyping_process_re_7a6p.png"
        alt="Open Vault"
      />
      <FormContainer>
        <Form onSubmit={null}>
          <Title>Create Account</Title>
          <FormInput type="text" placeholder="Name" signIn />
          <div>
            <FormInput type="email" placeholder="Email" signIn />
            <i
              className="fa-regular fa-user"
              style={{ marginLeft: "-3rem", fontSize: "1.5rem" }}
            ></i>
          </div>
          <div>
            <FormInput type="password" placeholder="Password" signIn />
            <i
              className="fa-regular fa-eye-slash"
              style={{ marginLeft: "-3rem", fontSize: "1.5rem" }}
            ></i>
          </div>
          <FormInput type="password" placeholder="Confirm Password" signIn />
          <CustomButton type="submit" signIn>
            SIGNUP
          </CustomButton>
          <Container>
            <HorizontalLine>&#x200B;</HorizontalLine>
            <Text>or</Text>
            <HorizontalLine>&#x200B;</HorizontalLine>
          </Container>
          <Social>
            <img
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
              alt="facebook"
            />
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="google"
            />
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"
              alt="instagram"
            />
          </Social>
        </Form>
        <RegisterText>
          Have an account?{" "}
          <Link to="/signin" style={{ textDecoration: "underline" }}>
            Login
          </Link>
        </RegisterText>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignUp;
