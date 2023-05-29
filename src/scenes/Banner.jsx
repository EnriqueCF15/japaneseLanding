import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import ContadorBanner from "../components/ContadorBanner";
import FormularioBanner from "../components/FormularioBanner";

//#region Styled Components

const BannerStyled = styled.div`
  display: flex;
  top: 0;
  padding: 2rem 6rem;
  font-size: 22px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  background-color: #ff0000;
  color: #000000;

  //mediaquery 1080-840

  @media only screen and (max-width: 1080px) {
    flex-direction: column;
    padding: 0 4rem 0.5rem;
    > div {
      margin-bottom: 1rem;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  max-width: 90%;
  @media only screen and (max-width: 1080px) {
    margin-top: 1rem;
  }
  @media only screen and (max-width: 1080px) {
    margin-top: 1rem;
  }
`;

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  >div{
    margin-left: 3rem;
  }

  @media only screen and (min-width: 840px) and (max-width: 1080px) {
    justify-content: space-around;
    padding: 0 3rem 0.2rem;
    margin-left: 0;
  }
  @media only screen and (max-width: 840px) {
    flex-direction: column;
    margin-left: 0;
  }
`;

const SpanStyled = styled.span`
  font-weight: lighter;
  margin-left: 4px;
`;

const ButtonStyled = styled.a`
  display: inline-block;
  font-weight: 700;
  background: #f8f8f8;
  padding: 10px 30px;
  font-size: 22px;
  color: #000000;
  position: relative;
  -webkit-transition: tra;
  transition: all 0.15s ease-in-out;
  border: 2px solid #fff;

  &:hover {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 840px) {
    display: flex;
    margin-top: 1rem;
  }
`;

//#endregion

export default function Banner() {
  const horasRef = useRef(null);
  const minutosRef = useRef(null);
  const segundosRef = useRef(null);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowForm(true);
    }, 100000);

    return () => clearTimeout(timeout);
  }, []);

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <BannerStyled>
      {/* Titulo del banner */}
      <TitleContainer>
        Clase gratuita
        <SpanStyled>con Chris Sensei</SpanStyled>
      </TitleContainer>
      {/* Contador regresivo del banner */}
      <CounterContainer>
        <div className="NumberContainer">
          <ContadorBanner
            horasRef={horasRef}
            minutosRef={minutosRef}
            segundosRef={segundosRef}
          />
        </div>
        {/* Botón del banner */}
        <div>
          <ButtonStyled type="button" href="#">
            UNIRME A LA CLASE
          </ButtonStyled>{" "}
        </div>
      </CounterContainer>
      {showForm && <FormularioBanner onClose={handleCloseForm} />}
    </BannerStyled>
  );
}
