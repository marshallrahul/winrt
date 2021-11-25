import styled from "styled-components";

export const TextInput = styled.input`
  min-width: 5rem;
  min-height: 2.5rem;
  font-size: 1.2rem;
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
    font-size: 1.2rem;
  }
`;
