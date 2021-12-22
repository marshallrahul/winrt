import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [cartItem, setCartItem] = useState([]);
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { cartItems } = cart;
  const { userInfo } = userLogin;

  // Total price
  const totalPrice = cartItem.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.productData.price * currentValue.quantity,
    0
  );

  //TODO: Update UI
  const handleChange = async (value, prodId) => {
    // Store data to DB
    if (userInfo) {
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
      // Store data to localStorage
    } else {
      const items = JSON.parse(localStorage.getItem("cartItems"));
      const productIdx = items.findIndex(
        (prod) => prod.productData._id === prodId
      );
      items[productIdx].quantity = value;
      localStorage.removeItem("cartItems");
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  };

  useEffect(() => {
    // Get data from DB
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
        setCartItem(data);
      } else {
        setCartItem(cartItems);
      }
    };
    getCarts();
  }, [userInfo, cartItems]);

  return (
    <Box>
      <Wrapper>
        <div>
          <Thead>
            <div>Item</div>
            <QTY>QTY</QTY>
            <Prc>Price</Prc>
          </Thead>
          {cartItem.length > 0
            ? cartItem.map((product) => (
                <TableContainer key={product.productData._id}>
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
                      onChange={(val) => {
                        handleChange(Number(val), product.productData._id);
                        setTimeout(() => {
                          window.location.reload();
                        }, 100);
                      }}
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
            : null}
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
