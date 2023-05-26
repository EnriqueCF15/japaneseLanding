import styled from "styled-components";
import { useRef } from "react";
import ContadorBanner from "../components/ContadorBanner";

//#region Styled Components

const BannerStyled = styled.div`
  display: flex;
  top: 0;
  padding: 2rem;
  font-size: 22px;
  font-weight: bold;
  align-items: center;
  justify-content: space-around;
  background-color: #ff0000;
  color: #000000;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    padding-bottom: 0.5rem;
    > div {
      margin-bottom: 1rem;
    }
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
  z-index: 1;
  -webkit-transition: tra;
  transition: all 0.2s ease-in-out;
  border: 2px solid #fff;
`;

//#endregion

export default function Banner() {
  const horasRef = useRef(null);
  const minutosRef = useRef(null);
  const segundosRef = useRef(null);
  return (
    <BannerStyled>
      {/* Titulo del banner */}
      <div style={{ display: "flex", maxWidth: "70%" }}>
        Clase gratuita
        <SpanStyled>con Chris Sensei</SpanStyled>
      </div>
      {/* Contador regresivo del banner */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ marginLeft: "5rem" }}>
          <ContadorBanner
            horasRef={horasRef}
            minutosRef={minutosRef}
            segundosRef={segundosRef}
          />
        </div>
        {/* Botón del banner */}
        <div style={{ right: "20rem", marginLeft: "40px" }}>
          <ButtonStyled type="button" href="#">
            UNIRME A LA CLASE
          </ButtonStyled>{" "}
        </div>
      </div>
      {/* Colocar el componente ContadorBanner aquí */}
    </BannerStyled>
  );
}
