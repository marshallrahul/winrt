import React from "react";
import Rating from "../../components/rating/rating.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import {
  Wrapper,
  TableContainer,
  ItemContainer,
  ImageContainer,
  Title,
  Description,
  RatingBox,
  RatingNum,
  RemoveText,
  Price,
  CheckoutContainer,
  Thead,
  TotalPrice,
  Text,
  Box,
  Quantity,
  QTY,
  Prc,
} from "./cart.style";

const CartScreen = () => {
  return (
    <Box>
      <Wrapper>
        <div>
          <Thead>
            <div>Item</div>
            <QTY>QTY</QTY>
            <Prc>Price</Prc>
          </Thead>
          <TableContainer>
            <ItemContainer>
              <ImageContainer src="/images/cycle-1.jpg" alt="cycle-1" />
              <div>
                <Title>Master Wheels</Title>
                <Description>
                  Mountain bicycle is a bicycle designed for off-road cycling.
                  Mountain bikes are...
                </Description>
                <RatingBox>
                  <RatingNum>4.9</RatingNum>
                  <Rating value={4.9} />
                </RatingBox>
              </div>
            </ItemContainer>
            <Quantity>
              <NumberInput size="lg" maxW={32} defaultValue={1} min={1} max={7}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Quantity>
            <RemoveText>Remove</RemoveText>
            <Price>₹5,000</Price>
          </TableContainer>
        </div>
        <CheckoutContainer>
          <Text>Total:</Text>
          <TotalPrice>₹5,000</TotalPrice>
          <CustomButton checkout>CHECKOUT</CustomButton>
        </CheckoutContainer>
      </Wrapper>
    </Box>
  );
};

export default CartScreen;
