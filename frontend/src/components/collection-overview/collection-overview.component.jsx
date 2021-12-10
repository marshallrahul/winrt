import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from "../collection-item/collection-item.component";
import { listProducts } from "../../redux/product/product.action";
import Loader from "../loader/loader.component";
import Message from "../message/message.component";
import {
  CollectionContainer,
  Wrapper,
  Title,
  UnderLine,
  TextBox,
  MoreLink,
} from "./collection-overview.style";

const CollectionOverview = () => {
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.products);
  const { loading, products, error } = productsList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <Wrapper>
      <TextBox>
        <Title>Our Bikes</Title>
        <UnderLine />
      </TextBox>
      <CollectionContainer>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          products.map((product) => (
            <CollectionItem
              key={product._id}
              prodId={product._id}
              product={product}
            />
          ))
        )}
      </CollectionContainer>
      <MoreLink to="/collections">
        <span>More</span> <i className="fa-solid fa-arrow-right"></i>
      </MoreLink>
    </Wrapper>
  );
};

export default CollectionOverview;
