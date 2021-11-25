import styled from "styled-components";

export const TextInput = styled.input`
  min-width: 50px;
  min-height: 25px;
  font-size: 1.2rem;
  font-family: inherit;
  background-color: transparent;
  border: 2px solid #bbc8d4;
  height: 5rem;
  width: 20rem;
  padding: 1rem;
  &:focus {
    outline: none;
  }

  &:placeholder-shown {
    font-family: inherit;
    font-size: 1.2rem;
  }
`;
