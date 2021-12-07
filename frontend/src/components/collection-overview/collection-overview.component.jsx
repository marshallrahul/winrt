import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionItem from "../collection-item/collection-item.component";
import products1 from "../../products";
import { listProducts } from "../../redux/product/product.action";
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

  const productDetails = useSelector((state) => state.products);
  const { loading, products, error } = productDetails;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(productDetails);

  return (
    <Wrapper>
      <TextBox>
        <Title>Our Bikes</Title>
        <UnderLine />
      </TextBox>
      <CollectionContainer>
        {products1.map((product) => (
          <CollectionItem
            key={product._id}
            prodId={product._id}
            product={product}
          />
        ))}
      </CollectionContainer>
      <MoreLink to="/collections">
        <span>More</span> <i className="fa-solid fa-arrow-right"></i>
      </MoreLink>
    </Wrapper>
  );
};

export default CollectionOverview;
