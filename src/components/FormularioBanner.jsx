import React from "react";
import styled from "styled-components";

//#region Styled Components
const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const FormStyled = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  width: 80%;
  top: 20%;
  max-width: 700px;
  text-align: center;
  border-radius: 20px;
  height: 23rem;
`;

const FormTittle = styled.h2`
  color: #f40000;
`;

const CloseButton = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: black;
  border: 2px solid whitesmoke;
  border-radius: 50%;
  font-size: 20px;
  color: white;
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: lighter;
  line-height: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

const ContainerStyled = styled.div`
  margin-top: 20px;
  display: block;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputStyled = styled.input`
  font-size: 16px;
  padding: 20px 18px;
  margin: 10px;
  width: 80%;
  border: 1px solid red;
  border-radius: 6px;

  &:focus {
    outline: none;
    border-color: red;
    box-shadow: 0 0 4px red;
  }

  &::placeholder {
    color: gray;
    font-size: 18px;
  }
`;

const ButtonStyled = styled.button`
  margin-top: 1rem;
  text-decoration: none;
  font-size: 40px;
  font-family: inherit;
  font-weight: bold;
  padding: 10px 40px;
  border-radius: 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
    background-color: #dd0000;
  }
`;

//#endregion

export default function FormularioBanner({ onClose }) {
  return (
    <OverlayStyled>
      <FormStyled>
        <CloseButton onClick={onClose}>x</CloseButton>
        <FormTittle>¡REGÍSTRATE RÁPIDO!</FormTittle>
        <p>Estamos a punto de iniciar...</p>
        <ContainerStyled>
          <InputStyled type="text" placeholder="Primer Nombre" />
          <InputStyled type="email" placeholder="Correo Electrónico" />
          <ButtonStyled>¡INGRESA AQUÍ!</ButtonStyled>
        </ContainerStyled>
      </FormStyled>
    </OverlayStyled>
  );
}
