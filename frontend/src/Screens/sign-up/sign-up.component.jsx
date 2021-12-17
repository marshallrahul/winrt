import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import Message from "../../components/message/message.component";
import Loader from "../../components/loader/loader.component";
import { register } from "../../redux/user/user.action";
import {
  SignInContainer,
  Title,
  // HorizontalLine,
  // Text,
  Illustration,
  Form,
  // Container,
  FormContainer,
  RegisterText,
  // Social,
  Icon,
} from "./sign-up.style";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const [userCredentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  const { name, email, password, confirmPassword } = userCredentials;

  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo, loading } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  console.log(userInfo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(register(userCredentials));
    }
  };

  return (
    <SignInContainer>
      <Illustration
        src="/images/undraw_Prototyping_process_re_7a6p.png"
        alt="Open Vault"
      />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          {loading && <Loader />}
          <Title>Create Account</Title>
          {message && <Message>{message}</Message>}
          {error && <Message>{error}</Message>}
          <FormInput
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleChange}
            input
          />
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
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            input
          />
          <CustomButton type="submit" signIn>
            SIGNUP
          </CustomButton>
          {/* <Container>
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
          </Social> */}
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
