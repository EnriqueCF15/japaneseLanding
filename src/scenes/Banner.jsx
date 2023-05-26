import styled from "styled-components";

const BannerStyled = styled.div`
  display: flex;
  top: 0;
  padding: 2rem;
  font-size: 22px;
  font-weight: bold;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ff0000;
  color: #000000;
`;



export default function Banner() {
  return (
    <div className="banner">
      <div style="display: flex;max-width: 70%;">
        Clase gratuita<span style="margin-left: 4px">con Chris Sensei</span>
      </div>
      <div style="display: flex; align-items: center;">
        <div id="contador" style="margin-left: 30rem">
          <span id="horas">00</span>h <span id="minutos">00</span>m
          <span id="segundos">00</span>s
        </div>
        <div style="right: 20rem; margin-left: 40px;">
          <a className="button-banner" type="button" href="#">
            UNIRME A LA CLASE
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
