import React from "react";
import { useParams } from "react-router-dom";
import products from "../../products";
import CustomButton from "../../components/custom-button/custom-button.component";
import Rating from "../../components/rating/rating.component";
import {
  ProductContainer,
  ProductImage,
  Container,
  Title,
  Price,
  Description,
  Select,
  SaveContainer,
  Box,
} from "./product.style";

const Product = () => {
  const params = useParams();
  const product = products.filter((prod) => prod._id === params.id)[0];

  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <Container>
        <Title>{product.name}</Title>
        <Rating value={product.rating} />
        <Price>Rs. &#8377;{product.price}</Price>
        <Description>{product.description}</Description>
        <Select>
          <option value="option1">1</option>
          <option value="option2">2</option>
          <option value="option3">3</option>
        </Select>
        <Box>
          <CustomButton prod>Add To Cart</CustomButton>
          <SaveContainer>
            <i
              className="fa-regular fa-heart"
              style={{
                fontSize: "2rem",
                marginRight: "0.5rem",
                color: "#FF6F91",
              }}
            ></i>{" "}
            <span>Save to Wishlist</span>
          </SaveContainer>
        </Box>
      </Container>
    </ProductContainer>
  );
};

export default Product;
