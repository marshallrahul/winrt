import React from "react";
import SingleReview from "../single-review/single-review.component";
import {
  Reviews,
  ReviewContainer,
  Title,
  UnderLine,
  Dots1,
  Dots2,
  Vector,
} from "./review.style";

const Review = () => {
  return (
    <ReviewContainer>
      <Title>Our Testimony</Title>
      <UnderLine />
      <Reviews>
        <SingleReview
          value={4.5}
          imageUrl="/images/Ellipse-103-2.png"
          alt="May Gauthier"
          name="Olia Nayda"
        />
        <SingleReview
          value={4}
          imageUrl="/images/Ellipse-103.png"
          alt="Ben Parker"
          name="Ben Parker"
        />
        <SingleReview
          value={5}
          imageUrl="/images/Ellipse-103-1.png"
          alt="May Gauthier"
          name="Olia Nayda"
        />
      </Reviews>
      <Dots1 src="/images/Dots.png" alt="Dots-1" />
      <Dots2 src="/images/Dots.png" alt="Dots-2" />
      <Vector src="/images/Curve.png" alt="Vector" />
    </ReviewContainer>
  );
};

export default Review;
