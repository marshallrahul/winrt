import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import {
  Wrapper,
  HeroImage,
  Content,
  Title,
  SubTitle,
  IconContainer,
  Icons,
} from "./hero.style";

import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <div>
          <Content>
            <Title>
              Your dreame <br /> mountain bike
            </Title>
            <SubTitle>
              Always back your scooter into the curb and sit when you can see
              it. The Sound of the throttle make fall in love with our bike.
            </SubTitle>
            <CustomButton>Buy now</CustomButton>
          </Content>
          <IconContainer>
            <a href="https://icons8.com/icon/rjOvx0oPISOf/facebook">
              <Icons
                src="https://img.icons8.com/stickers/100/000000/facebook-new.png"
                alt="facebook"
              />
            </a>
            <a href="https://icons8.com/icon/Plswr633TJUP/instagram">
              <Icons
                src="https://img.icons8.com/stickers/48/000000/instagram-new--v2.png"
                alt="instagram"
              />
            </a>
            <a href="https://icons8.com/icon/dfe6xOTOt2vY/twitter">
              <Icons
                src="https://img.icons8.com/stickers/100/000000/twitter.png"
                alt="twitter"
              />
            </a>
            <a href="https://icons8.com/icon/18103/twitch">
              <Icons
                src="https://img.icons8.com/color/48/000000/twitch--v1.png"
                alt="twitch"
              />
            </a>
          </IconContainer>
        </div>
        <div>
          <div>
            <HeroImage src={heroImage} alt="Bicycle" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
