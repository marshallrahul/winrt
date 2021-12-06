import styled, { css } from "styled-components";

const signInButtonStyles = css`
  font-weight: 700;
  border-radius: 0;
  color: #ffffff;
  background-color: #00a0ea;
  margin-top: 2.5rem;

  &:hover {
    background-color: #007ad7;
  }
`;

const checkoutButtonStyles = css`
  font-weight: 700;
  border-radius: 0;
  color: #ffffff;
  background-color: #00a0ea;
  margin-top: 2.5rem;

  &:hover {
    background-color: #007ad7;
  }

  @media only screen and (max-width: 946px) {
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: 1rem;
  }
`;

const detailButtonStyles = css`
  font-size: 1.3rem;
  color: #ffffff;
  background-color: #007ad7;
  border: none;
  outline: none;
  padding: 1.2rem 3.4rem;

  &:hover,
  &:focus {
    border: none;
    outline: none;
    background-color: #007ad7cf;
  }
`;

const newsletterButtonStyles = css`
  align-self: flex-end;
  border-radius: 2px;
  padding: 1.2rem 4rem;
  color: #ffffff;
  background-color: #00a0ea;
`;

const productButtonStyles = css`
  font-size: 1.3rem;
  font-weight: 700;
  padding: 0;
  border-radius: 2px;
  color: #ffff;
  background-color: #56ccf2;
  text-transform: uppercase;
  padding: 1rem 2rem;
  border: 1px solid #56ccf2;
`;

const getButtonStyles = (props) => {
  if (props.isDetail) {
    return detailButtonStyles;
  }

  if (props.newsletter) {
    return newsletterButtonStyles;
  }

  if (props.prod) {
    return productButtonStyles;
  }

  if (props.signIn) {
    return signInButtonStyles;
  }

  if (props.checkout) {
    return checkoutButtonStyles;
  }
};

export const CustomButtonContainer = styled.button`
  font-family: inherit;
  font-size: 1.5rem;
  color: #00a0ea;
  background-color: transparent;
  border: 1px solid #00a0ea;
  padding: 1.5rem 4.5rem;
  border-radius: 5rem;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #00a0ea;
    border: 1px solid #00a0ea;
    outline: none;
  }

  ${getButtonStyles}
`;
