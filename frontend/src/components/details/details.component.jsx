import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {
  DetailsContainer,
  ImgContainer,
  DetailBox,
  PreText,
  Title,
  DescriptionText,
} from "./details.styles";

const Details = () => {
  return (
    <DetailsContainer>
      <DetailBox>
        <PreText>Hunter</PreText>
        <Title>Sport Bicycle</Title>
        <DescriptionText>
          This streen bicycle is made from durable and lightweight <br />{" "}
          material, it is as versatile as it is attractive{" "}
        </DescriptionText>
        <CustomButton isDetail>Details</CustomButton>
      </DetailBox>
      <div>
        <ImgContainer>
          <img
            src="/images/details.jpg"
            alt="This bike fits in your backpack"
          />
        </ImgContainer>
      </div>
    </DetailsContainer>
  );
};

export default Details;
