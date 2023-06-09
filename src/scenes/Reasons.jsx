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
const FirstReason = styled.div`
  padding: 2rem;
  background-color: white;

  > .firstContainer {
    max-width: 1200px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    > .secondContainer {
      display: flex;
      justify-content: space-between;
      > .textContainer {
        flex-direction: column;
        width: 50%;

        margin: 20px;
        > h1,
        h3 {
          margin: 20px;
        }
      }
      > .image {
        display: block;
      
        justify-content: center;
        align-items: center;
        width: 400px;
        height: 400px;
        margin: 15px;
        > img {
          min-width: 90%;
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

// media query 950 px
const SecondReason = styled(FirstReason)`
  background-color: #ff3434;
  .textContainer {
    > h1,
    h3 {
      color: white;
    }
  }
`;

const ThirdReason = styled(FirstReason)`
  background-color: #ffffff;
`;
//#endregion

export default function Reasons() {
  return (
    <section>
      <TitleStyled>
        3 Razones por las que realmente aprenderás Japonés con nosotros
      </TitleStyled>
      {/* First Reason */}
      <FirstReason>
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
      </FirstReason>
      {/* Second Reason */}
      <SecondReason>
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
      </SecondReason>
      {/* Third Reason */}
      <ThirdReason>
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
      </ThirdReason>
    </section>
  );
}
