import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomButton from "../custom-button/custom-button.component";
import {
  Wrapper,
  HeroImage,
  Content,
  Title,
  SubTitle,
  IconContainer,
} from "./hero.style";
import {
  FacebookLogo,
  TwitterLogo,
  InstagramLogo,
  TwitchLogo,
} from "phosphor-react";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  return (
    <Wrapper>
      <Row className="mx-0">
        <Col>
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
            <FacebookLogo size={48} style={{ color: "#4267B2" }} />
            <TwitterLogo size={48} style={{ color: "#1DA1F2" }} />
            <InstagramLogo
              size={48}
              style={
                {
                  // background:
                  //   "-webkit-linear-gradient(#FEDA77, #F58529, #DD2A78, #8134AF, #515BD4)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }
              }
            />
            <TwitchLogo size={48} style={{ color: "#9147fe" }} />
          </IconContainer>
        </Col>
        <Col>
          <div>
            <HeroImage src={heroImage} alt="Bicycle" />
          </div>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Hero;
