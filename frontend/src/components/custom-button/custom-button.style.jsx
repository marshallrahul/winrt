import styled, { css } from "styled-components";

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

const getButtonStyles = (props) => {
  if (props.isDetail) {
    return detailButtonStyles;
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

  &:hover,
  &:focus {
    color: #fff;
    background-color: #00a0ea;
    border: 1px solid #00a0ea;
    outline: none;
  }

  ${getButtonStyles}
`;
