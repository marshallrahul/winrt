import React from "react";
import Rating from "../rating/rating.component";
import {
  CardContainer,
  ProductImage,
  CardBody,
  Box,
  Title,
  Price,
  UserBox,
} from "./collection-item.style";

const CollectionItem = ({ product }) => {
  return (
    <CardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <CardBody>
        <Box>
          <Rating value={product.rating} />
          <UserBox>
            <i class="fa-regular fa-heart" style={{ fontSize: "2rem" }}></i>
            <div
              style={{ borderLeft: "1px solid black", height: "2rem" }}
            ></div>
            <i class="fa-solid fa-cart-plus" style={{ fontSize: "2rem" }}></i>
          </UserBox>
        </Box>
        <Title>{product.name}</Title>
        <Price>&#8377;{product.price}</Price>
      </CardBody>
    </CardContainer>
  );
};

export default CollectionItem;
