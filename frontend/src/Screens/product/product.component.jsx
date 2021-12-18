import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomButton from "../../components/custom-button/custom-button.component";
import Rating from "../../components/rating/rating.component";
import Loader from "../../components/loader/loader.component";
import Message from "../../components/message/message.component";
import { listProductDetails } from "../../redux/product/product.action";
import { addToCart } from "../../redux/cart/cart.action";
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
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const params = useParams();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(params.id));
  }, [dispatch, params]);

  const handleChange = (event) => {
    setQty(event.currentTarget.value);
  };

  if (loading) return <Loader />;
  if (error) return <Message>{error}</Message>;
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt={product.name} />
      <Container>
        <Title>{product.name}</Title>
        <Rating value={product.rating} />
        <Price>Rs. &#8377;{product.price}</Price>
        <Description>{product.description}</Description>
        <Select
          onChange={(e) => handleChange(e)}
          value={qty}
          // defaultValue={qty}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <Box>
          <CustomButton
            onClick={() => dispatch(addToCart(product._id, qty))}
            prod
          >
            Add To Cart
          </CustomButton>
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
