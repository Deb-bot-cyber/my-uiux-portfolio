import React from "react";
import {
  HomeDetails,
  HomeImage,
  StyledHome,
  Subtitle,
  SubtitleItalic,
  SubtitleRegular,
  SubTitles,
  SupTitle,
  Title,
} from "../../styles/Home.styled/Home.styled";
import { HomeImg } from "../../styles/Home.styled/Home.styled";
import img from "../../assets/home-image.jpg";

const Home = () => {
  return (
    <StyledHome id="home">
      <HomeDetails>
        <SupTitle>Hello, I'm Debashis Barman!</SupTitle>
        <Title>
          UI/UX Designer & Front-End <span>De</span>veloper, <br /> based in India.
        </Title>
        <SubTitles>
          <Subtitle>
            <SubtitleRegular>Indian</SubtitleRegular>
            <SubtitleItalic>* AVAILABLE WORLDWIDE</SubtitleItalic>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>DESIGN · DEVELOPMENT</SubtitleRegular>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>(2024) ALL RIGHTS RESERVED</SubtitleRegular>
          </Subtitle>
        </SubTitles>
      </HomeDetails>
      <HomeImage>
        <HomeImg src={img} alt="Home" />
      </HomeImage>
    </StyledHome>
  );
};

export default Home;
