import styled, { keyframes } from "styled-components";

const moveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(-2deg);
  }
  66% {
    transform: rotate(2deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

//#region Styled Components


const HeroSection = styled.section`
  position: relative;
  color: #ff0000;
  padding: 3rem 0;
  background-image: linear-gradient(rgb(255, 187, 187,0.1), rgb(255, 255, 255,0.95)), url('../assets/fuji_background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 4rem;
  
  `;

const HeroContainer = styled.div`
  text-align: center;
  max-width: 90%;
  justify-content: center;
  margin: auto;
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
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
`;

const VideoEmbed = styled.iframe`
  width: 100%;
  height: 500px;
  margin-bottom: 25px;
`;

const ButtonStyled = styled.a`
  .mobile-text {
    display: none;
  }
  display: flex;
  justify-content: center;
  align-self: center;
  width: 40rem;
  font-weight: 700;
  background: #ff0000;
  padding: 10px 30px;
  font-size: 42px;
  margin: auto;
  color: #ffffff;
  -webkit-transition: tra;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1.5rem;
  border-radius: 20px;
  animation: ${moveAnimation} 2s infinite;

  &:hover {
  transition: all 0.1s ease-in-out;
    transform: scale(1.02);
    animation: none;
    background-color: #ff3939;

  }

  @media only screen and (max-width: 840px) {
    display: flex;
    width: 30rem;
    .default-text {
      display: none;
    }

    .mobile-text {
      display: flexbox;
    }
  }
`;

const StyledSubtitle = styled.h3`
  font-style: italic;
`
//#endregion

export default function Hero_Section() {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroTitle>
          <h2>Aprende Japonés</h2>
          <span>
            en sólo 30 días sin importar tu edad, talento o experiencia
            previa...
          </span>{" "}
        </HeroTitle>
        <TrendingText>
          Tu camino hacia el dominio del idioma japonés
        </TrendingText>
        <VideoContainer>
          <VideoEmbed
            src="https://www.youtube.com/watch?v=LXcHh30gjzg"
            frameborder="0"
            allowfullscreen
          />
        </VideoContainer>
        <div>
          <ButtonStyled type="button" href="#">
            <span className="default-text">Haz Clic para Ingresar</span>
            <span className="mobile-text">Ingresa aquí</span>
          </ButtonStyled>
        </div>
        <StyledSubtitle>
          100% GRATUITA - ¡Inicia la clase ahora!
        </StyledSubtitle>
      </HeroContainer>
    </HeroSection>
  );
}
