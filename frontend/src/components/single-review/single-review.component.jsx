import React from "react";
import Rating from "../rating/rating.component";
import {
  SingleReviewContainer,
  AvatarContainer,
  AvatarBox,
  Avatar,
  AvatarName,
  ReviewText,
} from "./single-reivew.style";

const SingleReview = ({ value, imageUrl, alt, name }) => {
  return (
    <SingleReviewContainer>
      <Rating value={value} marginButtom="1rem" />
      <ReviewText>
        Adrien Brody and Milla Jovovich, "Dummy" is that special kind of indie
        comedy that knows how to perfectly balance its offbeat humor with just
        the right amount of dramatic intrigue.
      </ReviewText>
      <AvatarBox>
        <AvatarContainer>
          <Avatar src={imageUrl} alt={alt} />
        </AvatarContainer>
        <AvatarName>{name}</AvatarName>
      </AvatarBox>
    </SingleReviewContainer>
  );
};

export default SingleReview;
