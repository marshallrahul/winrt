import React from "react";
import {
  Wrapper,
  FooterContainer,
  CopyrightTag,
  FooterList,
  MediaContainer,
  Icons,
} from "./footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <CopyrightTag>
          <span>&#169;</span>copyright winrt
        </CopyrightTag>
        <FooterList>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
          <li>Forth</li>
          <li>Fifth</li>
        </FooterList>
        <MediaContainer>
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
        </MediaContainer>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
