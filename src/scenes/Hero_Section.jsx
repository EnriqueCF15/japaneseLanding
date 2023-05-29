import React from "react";
import styled from "styled-components";

//#region Styled Components

const HeroSection = styled.section`
  background-color: #ffffff;
  color: #ff0000;
  padding: 3rem 0;
`;

const HeroContainer = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;

  > h2 {
    color: red;
  }
  > span {
    font-weight: lighter;
  }
`;

const TrendingText = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const VideoEmbed = styled.iframe`
  width: 100%;
  height: 500px;
`;

//#endregion

export default function Hero_Section() {
  return (
    <HeroSection>
      <HeroContainer>
          <HeroTitle>
            <h2>Aprende Japonés</h2>
            <span>
              en sólo 30 días sin importar tu edad, talento o experiencia previa...
            </span>{" "}
          </HeroTitle>
      </HeroContainer>
      <TrendingText>Tu camino hacia el dominio del idioma japonés</TrendingText>
      <VideoContainer>
        <VideoEmbed
          src="https://www.youtube.com/watch?v=LXcHh30gjzg"
          frameborder="0"
          allowfullscreen
        />
      </VideoContainer>
    </HeroSection>
  );
}
