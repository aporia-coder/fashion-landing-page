import React from "react";
import styled from "styled-components";
import clothes from "../assets/images/clothes.png";

const About = () => {
  return (
    <AboutContainer>
      <Left>
        <p>Find your next look dhfg df gsg sd gdfs g dsgds gsd gsd g </p>
      </Left>
      <Right>
        <img src={clothes} alt="" />
        <h1>Your Next Look</h1>
      </Right>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  background: white;
  height: 90vh;
  width: 100%;
`;

const Left = styled.div`
  background-color: #a36e4f;
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  display: flex;
  background-color: #e3d0af;
  width: 70%;
  height: 100%;
  h1 {
    color: #000;
    font-weight: 400;
    font-size: 6rem;
    /* display: inline; */
    z-index: 2;
  }
`;

export default About;
