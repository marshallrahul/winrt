import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Message from "../../components/message/message.component";
import Loader from "../../components/loader/loader.component";
import { login } from "../../redux/user/user.action";
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
  Icon,
} from "./sign-in.style";

const SignIn = () => {
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);
  console.log(userLogin);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <SignInContainer>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Title>Login</Title>
          {loading && <Loader />}
          {error && <Message>{error}</Message>}
          <div>
            <FormInput
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              input
            />
            <Icon className="fa-regular fa-user" />
          </div>
          <div>
            <FormInput
              name="password"
              type={hidden ? "password" : "text"}
              placeholder="Password"
              value={password}
              onChange={handleChange}
              input
            />
            <Icon
              className={
                hidden ? "fa-regular fa-eye-slash" : "fa-regular fa-eye"
              }
              onClick={() => {
                setHidden(!hidden);
              }}
            />
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
              <FacebookIcon className="fa-brands fa-facebook-square"></FacebookIcon>
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
