import React from "react";
import {
  AboutDetails,
  AboutText,
  StyledAbout,
} from "../../styles/About.styled/About.styled";
import {
  SectionSupTitle,
  SectionTitle,
} from "../../styles/Section.styled/SectionHeader";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionSupTitle>ABOUT ME</SectionSupTitle>
      <SectionTitle>
        HELPING BRANDS TO COMMUNICATE WITH <br /> THEIR AUDIENCE IN ELEGANT WAY
      </SectionTitle>
      <AboutDetails>
        <AboutText>
          Namaste! I'm Debashis Barman, a CS Undergrad student from JIS College of Engineering
           — and an Indian UI/UX Designer and Front-End Developer based in the India. I'm passionate about using
          my design to improve the lives of others, and I am always eager to
          learn new things everyday. In my spare time, I enjoy Designing,
          video editing, and spending time with my laptop. I am passionate
          about designing user experiences that are pleasant, meaningful, and
          powerful.
        </AboutText>
      </AboutDetails>
    </StyledAbout>
  );
};

export default About;
