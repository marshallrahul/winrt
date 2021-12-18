import React, { useState } from "react";
import { useSelector } from "react-redux";
import NumberFormat from "react-number-format";
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
  const [value, setValue] = useState();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const totalPrice = cartItems.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    0
  );
  console.log(value);

  return (
    <Box>
      <Wrapper>
        <div>
          <Thead>
            <div>Item</div>
            <QTY>QTY</QTY>
            <Prc>Price</Prc>
          </Thead>
          {cartItems.map((product) => (
            <TableContainer key={product._id}>
              <ItemContainer>
                <ImageContainer src={product.image} alt={product.name} />
                <div>
                  <Title>{product.name}</Title>
                  <Description>
                    {product.description.length > 80 &&
                      `${product.description.substr(1, 80)}...`}
                  </Description>
                  <RatingBox>
                    <RatingNum>{product.rating}</RatingNum>
                    <Rating value={product.rating} />
                  </RatingBox>
                </div>
              </ItemContainer>
              <Quantity>
                <NumberInput
                  size="lg"
                  maxW={32}
                  defaultValue={product.quantity}
                  min={1}
                  max={product.countInStock}
                  onChange={(val) => setValue(val)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Quantity>
              <RemoveText>Remove</RemoveText>
              <Price>
                {" "}
                <NumberFormat
                  value={product.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
              </Price>
            </TableContainer>
          ))}
        </div>
        <CheckoutContainer>
          <Text>Total:</Text>
          <TotalPrice>
            <NumberFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"₹"}
            />
          </TotalPrice>
          <CustomButton checkout>CHECKOUT</CustomButton>
        </CheckoutContainer>
      </Wrapper>
    </Box>
  );
};

export default CartScreen;
