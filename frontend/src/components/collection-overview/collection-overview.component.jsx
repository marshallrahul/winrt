import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import products from "../../products";
import {
  CollectionContainer,
  Wrapper,
  Title,
  UnderLine,
  TextBox,
  MoreLink,
} from "./collection-overview.style";

const CollectionOverview = () => {
  return (
    <Wrapper>
      <TextBox>
        <Title>Our Bikes</Title>
        <UnderLine />
      </TextBox>
      <CollectionContainer>
        {products.map((product) => (
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
