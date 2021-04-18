import React from "react";
import styled from "styled-components";
import model from "../assets/images/model.jpg";
import modelFlipped from "../assets/images/modelFlipped.jpg";

// Components
import { Container } from "../utils/reusableComponents";

const Hero = () => {
  return (
    <Background>
      <Container flex column>
        <HeroText>
          <h1>Find your Individuality.</h1>
        </HeroText>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${model}) center center / cover no-repeat;
  p {
    font-weight: 500;
  }
`;

const HeroText = styled.div`
  background-image: url(${modelFlipped});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  h1 {
    text-transform: none;
    font-weight: 400;
    color: ;
  }
`;

export default Hero;
