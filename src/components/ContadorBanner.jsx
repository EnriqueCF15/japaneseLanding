import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

//#region Styled Components
const SpanStyled = styled.span`
  font-weight: lighter;
`;
//#endregion


export default function ContadorBanner() {
    const horasRef = useRef(null);
    const minutosRef = useRef(null);
    const segundosRef = useRef(null);
    const [duration, setDuration] = useState(300);
  
    useEffect(() => {
      const intervalo = setInterval(() => {
        setDuration((prevDuracion) => prevDuracion - 1);
      }, 1000);
  
      return () => clearInterval(intervalo);
    }, []);
  
    useEffect(() => {
      const horas = Math.floor(duration / 3600);
      const minutos = Math.floor((duration % 3600) / 60);
      const segundos = duration % 60;
  
      if (horasRef.current) {
        horasRef.current.textContent = horas.toString().padStart(2, "0");
      }
      if (minutosRef.current) {
        minutosRef.current.textContent = minutos.toString().padStart(2, "0");
      }
      if (segundosRef.current) {
        segundosRef.current.textContent = segundos.toString().padStart(2, "0");
      }
  
      if (duration < 0) {
        alert("¡Tiempo terminado!");
      }
    }, [duration]);
  
    return (
      <div>
        <SpanStyled ref={horasRef} id="horas"></SpanStyled> h{" "}
        <SpanStyled ref={minutosRef} id="minutos"></SpanStyled> m{" "}
        <SpanStyled ref={segundosRef} id="segundos"></SpanStyled> s
      </div>
    );
  }