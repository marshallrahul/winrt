import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import products from "../../products";
import {
  CollectionContainer,
  Wrapper,
  Title,
  UnderLine,
  TextBox,
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
          <CollectionItem key={product._id} product={product} />
        ))}
      </CollectionContainer>
    </Wrapper>
  );
};

export default CollectionOverview;
