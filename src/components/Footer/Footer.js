import React from "react";
import {
  FooterSocials,
  Social,
  Socials,
  StyledFooter,
  StyledFooterMainText,
  Developed,
  Developer,
} from "../../styles/Footer.styled/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterMainText
        href="mailto:deb.b.connect@gmail.com"
        data-hover="Let's talk!"
      >
        deb.b.connect@gmail.com
      </StyledFooterMainText>
      <FooterSocials>
        <Socials>
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.facebook.com/ds.deba.52"
          >
            facebook
          </Social>
          &nbsp;-&nbsp;
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/debashisbarman1"
          >
            BEHANCE
          </Social>
          &nbsp;-&nbsp;
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/debashisbarman1"
          >
            DRIBBBLE
          </Social>
          &nbsp;-&nbsp;
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fiverr.com/debashisbarman1"
          >
            FIVERR
          </Social>
        </Socials>
        <Developed>
          developed by{" "}
          <Developer
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.fiverr.com/debashisbarman1"
          >
            Debashis Barman
          </Developer>
        </Developed>
      </FooterSocials>
    </StyledFooter>
  );
};

export default Footer;
