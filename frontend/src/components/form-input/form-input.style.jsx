import styled, { css } from "styled-components";

const signInStyles = css`
  width: 44rem;
  margin-bottom: 3rem;

  @media only screen and (max-width: 1024px) {
    width: 35rem;
  }

  @media only screen and (max-width: 320px) {
    width: 30rem;
  }
`;

const getButtonStyles = (props) => {
  if (props.signIn) {
    return signInStyles;
  }
};

export const TextInput = styled.input`
  min-width: 5rem;
  min-height: 2.5rem;
  font-size: 1.3rem;
  font-family: inherit;
  background-color: transparent;
  border: 2px solid #bbc8d4;
  height: 5rem;
  width: 30rem;
  padding: 1rem;
  &:focus {
    outline: none;
  }

  &:placeholder-shown {
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 700;
  }

  ${getButtonStyles}

  @media only screen and (max-width: 1024px) and (min-width: 600px) {
  }
`;
