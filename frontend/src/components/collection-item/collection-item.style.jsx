import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CardBody = styled.div`
  padding: 0 2rem 2rem;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const ContainerBox = styled.div`
  height: 0rem;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const UserBox = styled.div`
  display: flex;
  & > * {
    margin-left: 1rem;
  }
`;
