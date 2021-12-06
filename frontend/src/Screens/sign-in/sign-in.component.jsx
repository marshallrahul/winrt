import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  SignInContainer,
  Title,
  HorizontalLine,
  Text,
  SocialContainer,
  Illustration,
  Form,
  Container,
  Social,
  FormContainer,
  RegisterText,
  GoogleIcon,
  FacebookIcon,
} from "./sign-in.style";

const SignIn = () => {
  return (
    <SignInContainer>
      <FormContainer>
        <Form onSubmit={null}>
          <Title>Login</Title>
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
          <CustomButton type="submit" signIn>
            LOGIN
          </CustomButton>
          <Container>
            <HorizontalLine>&#x200B;</HorizontalLine>
            <Text>or</Text>
            <HorizontalLine>&#x200B;</HorizontalLine>
          </Container>
          <Social>
            <SocialContainer facebook>
              <FacebookIcon className="fa-brands fa-facebook-f"></FacebookIcon>
              Continue with Facebook
            </SocialContainer>
            <SocialContainer>
              <GoogleIcon className="fa-brands fa-google"></GoogleIcon>
              Login with Google
            </SocialContainer>
          </Social>
        </Form>
        <RegisterText>
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "underline" }}>
            Register
          </Link>
        </RegisterText>
      </FormContainer>
      <Illustration
        src="/images/undraw_Web_devices_re_m8sc.png"
        alt="Open Vault"
      />
    </SignInContainer>
  );
};

export default SignIn;
