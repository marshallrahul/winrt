import React from "react";
import { useNavigate } from "react-router-dom";
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

const CollectionItem = ({ product, prodId }) => {
  const navigate = useNavigate();

  return (
    <CardContainer onClick={() => navigate(`/product/${prodId}`)}>
      <ProductImage src={product.image} alt={product.name} />
      <CardBody>
        <Box>
          <Rating value={product.rating} />
          <UserBox>
            <i className="fa-regular fa-heart" style={{ fontSize: "2rem" }}></i>
            <div
              style={{ borderLeft: "1px solid black", height: "2rem" }}
            ></div>
            <i
              className="fa-solid fa-cart-plus"
              style={{ fontSize: "2rem" }}
            ></i>
          </UserBox>
        </Box>
        <Title>{product.name}</Title>
        <Price>&#8377;{product.price}</Price>
      </CardBody>
    </CardContainer>
  );
};

export default CollectionItem;
