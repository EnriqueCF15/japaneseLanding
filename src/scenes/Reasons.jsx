import React from "react";
import styled from "styled-components";

//#region Styled Components

const TitleStyled = styled.p`
  font-weight: bold;
  display: flex;
  justify-content: center;
  padding: 2rem;
  font-size: 28px;
  color: white;
  background-color: black;
`;
const ReasonsStyled = styled.div`
  > .firstContainer {
    max-width: fit-content;
    margin: auto;
    justify-content: center;
    align-items: center;
    > .secondContainer {
      display: flex;
      justify-content: space-between;
      > .textContainer {
        flex-direction: column;
        width: 35rem;
        margin: 20px;
        > h1,
        h3 {
          margin: 20px;
        }
      }
      > .image {
        width: 30rem;
        margin: 15px;
        > img {
          width: calc(100% - 20px);
          height: calc(100% - 20px);
          object-fit: cover;
          margin: 10px;
        }
      }
    }
  }
`;
//#endregion

export default function Reasons() {
  return (
    <section>
      <TitleStyled>
        3 Razones por las que realmente aprenderás Japonés con nosotros
      </TitleStyled>
      {/* First Reason */}
      <ReasonsStyled>
        <div className="firstContainer">
          <div className="secondContainer">
            <div className="textContainer">
              <h1 className="title">
                Short Audio & Video Lessons for Fast and Easy Learning
              </h1>
              <h3 className="text">
                Want to start speaking Japanese from your first lesson? You
                will! Our lessons take you by the hand and guide you through
                real Japanese conversations. Our teachers slow down and explain
                every word and phrase. Just imagine... you’ll finally understand
                every Japanese word you hear. Learning for travel or love? Want
                to focus on reading, writing, grammar or culture? You get
                lessons based on your goals and needs.
              </h3>
            </div>
            <div className="image">
              <img src="../assets/fuji_background.jpg" alt="Imagen" />
            </div>
          </div>
        </div>
      </ReasonsStyled>
      {/* Second Reason */}
      <ReasonsStyled>
        <div className="firstContainer">
          <div className="secondContainer">
            <div className="image">
              <img src="../assets/fuji_background.jpg" alt="Imagen" />
            </div>
            <div className="textContainer">
              <h1 className="title">
                Short Audio & Video Lessons for Fast and Easy Learning
              </h1>
              <h3 className="text">
                Want to start speaking Japanese from your first lesson? You
                will! Our lessons take you by the hand and guide you through
                real Japanese conversations. Our teachers slow down and explain
                every word and phrase. Just imagine... you’ll finally understand
                every Japanese word you hear. Learning for travel or love? Want
                to focus on reading, writing, grammar or culture? You get
                lessons based on your goals and needs.
              </h3>
            </div>
          </div>
        </div>
      </ReasonsStyled>
      {/* Third Reason */}
      <ReasonsStyled>
        <div className="firstContainer">
          <div className="secondContainer">
            <div className="textContainer">
              <h1 className="title">
                Short Audio & Video Lessons for Fast and Easy Learning
              </h1>
              <h3 className="text">
                Want to start speaking Japanese from your first lesson? You
                will! Our lessons take you by the hand and guide you through
                real Japanese conversations. Our teachers slow down and explain
                every word and phrase. Just imagine... you’ll finally understand
                every Japanese word you hear. Learning for travel or love? Want
                to focus on reading, writing, grammar or culture? You get
                lessons based on your goals and needs.
              </h3>
            </div>
            <div className="image">
              <img src="../assets/fuji_background.jpg" alt="Imagen" />
            </div>
          </div>
        </div>
      </ReasonsStyled>
    </section>
  );
}
