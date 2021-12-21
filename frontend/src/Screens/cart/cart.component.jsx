import React, { useEffect, useState } from "react";
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
import axios from "axios";

const CartScreen = () => {
  const [cartItemsDB, setCartItemsDB] = useState([]);
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { cartItems } = cart;
  const { userInfo } = userLogin;
  const totalPrice = cartItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.quantity,
    0
  );
  console.log(cartItemsDB);

  const totalPriceFromDB = cartItemsDB.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.productData.price * currentValue.quantity,
    0
  );

  const handleChange = async (value, prodId) => {
    if (cartItemsDB.length > 0) {
      await axios("http://localhost:5000/api/cart", {
        method: "POST",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userInfo.token,
        },
        data: {
          prodId: prodId,
          quantity: value,
        },
      });
    } else {
      const items = JSON.parse(localStorage.getItem("cartItems"));
      const productIdx = items.findIndex((prod) => prod._id === prodId);
      items[productIdx].quantity = value;
      localStorage.removeItem("cartItems");
      localStorage.setItem("cartItems", JSON.stringify(items));
      window.location.reload();
    }
  };

  useEffect(() => {
    const getCarts = async () => {
      if (userInfo) {
        const { data } = await axios("http://localhost:5000/api/cart", {
          method: "GET",
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + userInfo.token,
          },
        });
        setCartItemsDB(data);
      }
    };
    getCarts();
  }, [userInfo]);

  return (
    <Box>
      <Wrapper>
        <div>
          <Thead>
            <div>Item</div>
            <QTY>QTY</QTY>
            <Prc>Price</Prc>
          </Thead>
          {cartItemsDB.length > 0
            ? cartItemsDB.map((product) => (
                <TableContainer key={product._id}>
                  <ItemContainer>
                    <ImageContainer
                      src={product.productData.image}
                      alt={product.productData.name}
                    />
                    <div>
                      <Title>{product.productData.name}</Title>
                      <Description>
                        {product.productData.description.length > 80 &&
                          `${product.productData.description.substr(1, 80)}...`}
                      </Description>
                      <RatingBox>
                        <RatingNum>
                          {parseFloat(product.productData.rating)}
                        </RatingNum>
                        <Rating value={product.productData.rating} />
                      </RatingBox>
                    </div>
                  </ItemContainer>
                  <Quantity>
                    <NumberInput
                      size="lg"
                      maxW={32}
                      defaultValue={product.quantity}
                      min={1}
                      max={product.productData.countInStock}
                      onChange={(val) =>
                        handleChange(Number(val), product.productData._id)
                      }
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
                      value={product.productData.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                    />
                  </Price>
                </TableContainer>
              ))
            : cartItems.map((product) => (
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
                        <RatingNum>{parseFloat(product.rating)}</RatingNum>
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
                      onChange={(val) => handleChange(Number(val), product._id)}
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
              value={cartItemsDB.length > 0 ? totalPriceFromDB : totalPrice}
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
