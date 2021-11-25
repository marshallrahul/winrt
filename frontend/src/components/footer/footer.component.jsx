import React from "react";
import { FooterContainer } from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <span>&#169;</span>copyright winrt
      </div>
      <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
        <li>Forth</li>
        <li>Fifth</li>
      </ul>
      <div>
        <a href="https://icons8.com/icon/rjOvx0oPISOf/facebook">
          <img
            src="https://img.icons8.com/stickers/100/000000/facebook-new.png"
            alt="facebook"
          />
        </a>
        <a href="https://icons8.com/icon/Plswr633TJUP/instagram">
          <img
            src="https://img.icons8.com/stickers/48/000000/instagram-new--v2.png"
            alt="instagram"
          />
        </a>
        <a href="https://icons8.com/icon/dfe6xOTOt2vY/twitter">
          <img
            src="https://img.icons8.com/stickers/100/000000/twitter.png"
            alt="twitter"
          />
        </a>
        <a href="https://icons8.com/icon/18103/twitch">
          <img
            src="https://img.icons8.com/color/48/000000/twitch--v1.png"
            alt="twitch"
          />
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
